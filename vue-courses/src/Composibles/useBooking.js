import { onMounted, ref } from "vue";

const bookings = ref([]);
const loading = ref(false);
const error = ref(null);

//Fetch data from database
const fetchBookingData = async () => {
  loading.value = true;
  try {
    const response = await fetch("http://localhost:3000/bookings");
    bookings.value = await response.json();
    if (!response.ok) {
      throw new Error("Failed to load data");
    }
    loading.value = false;
  } catch (e) {
    error.value = e.message;
  }
};

//Booking courses
const bookCourses = async (course) => {
  const bookedCourses = {
    id: course.id,
    title: course.title,
    price: course.price,
    description: course.description,
    status: "pending",
  };
  if (bookings.value.some((b) => b.id === course.id)) {
    alert("This course already purchased");
    return;
  }
  bookings.value.push(bookedCourses);
  try {
    const response = await fetch(" http://localhost:3000/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...bookedCourses, status: "confirmed" }),
    });
    if (response.ok) {
      const index = bookings.value.findIndex((b) => b.id === bookedCourses.id);
      bookings.value[index] = await response.json();
    } else {
      bookings.value = bookings.value.filter((b) => b.id != bookedCourses.id);
      return;
    }
  } catch (e) {
    console.log(e);
    bookings.value = bookings.value.filter((b) => b.id != bookedCourses.id);
  }
};

//Remove booking items
const removeBooking = async (courseId) => {
  const index = bookings.value.findIndex((b) => b.id === courseId);
  const toBeDeleted = bookings.value[index];
  bookings.value.splice(index, 1);
  try {
    const response = await fetch(`http://localhost:3000/bookings/${courseId}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Couldn't delete");
    }
  } catch (e) {
    console.error(e);
    bookings.value.splice(index, 0, toBeDeleted);
  }
};

export default function useBooking() {
  return {
    bookings,
    loading,
    error,
    fetchBookingData,
    bookCourses,
    removeBooking,
  };
}

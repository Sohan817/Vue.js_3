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

export default function useBooking() {
  return {
    bookings,
    loading,
    error,
    fetchBookingData,
  };
}

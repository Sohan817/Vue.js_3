<template>
  <form @submit.prevent="handleSubmit">
    <label>Email:</label>
    <input type="email" required v-model="email" />

    <label>Password:</label>
    <input type="passwrd" required v-model="password" />
    <p class="passerror" v-if="passwordError">{{ passwordError }}</p>

    <label>Role:</label>
    <select v-model="role">
      <option value="designer">Web Designer</option>
      <option value="developer">Web Developer</option>
    </select>
    <label>Skills:</label>
    <input type="text" v-model="tempSkills" @keyup.alt="addSkills" />
    <div class="skills" v-for="skill in skills" :key="skill">
      <span @click="deleteSkill(skill)">{{ skill }}</span>
    </div>
    <div class="terms">
      <input type="checkbox" required v-model="terms" />
      <label for="">Accept terms and conditions</label>
    </div>
    <div class="submit">
      <button>Create an Account</button>
    </div>
  </form>

  <p>Email:{{ email }}</p>
  <p>Password:{{ password }}</p>
  <p>Role:{{ role }}</p>
  <p>Terms:{{ terms }}</p>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      role: "designer",
      terms: false,
      tempSkills: "",
      skills: [],
      passwordError: "",
    };
  },
  methods: {
    addSkills(e) {
      if (e.key === "," && this.tempSkills) {
        if (!this.skills.includes(this.tempSkills)) {
          this.skills.push(this.tempSkills.toUpperCase());
        }
        this.tempSkills = "";
      }
    },
    deleteSkill(skill) {
      this.skills = this.skills.filter((item) => {
        return skill != item;
      });
    },
    handleSubmit() {
      //Validate password
      this.passwordError =
        this.password.length > 5
          ? (this.passwordError = "")
          : (this.passwordError = "Password should be at least 6 characters");
      console.log("From submitted");
      console.log("Email:", this.email);
      console.log("Password:", this.password);
      console.log("Role:", this.role);
      console.log("Skills:", this.skills);
      console.log("terms:", this.terms);
    },
  },
};
</script>

<style>
form {
  max-width: 420px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
label {
  color: aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.8em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input,
select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}
input[type="checkbox"] {
  display: inline-block;
  width: 16px;
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;
}
.skills {
  display: inline-block;
  margin: 20px 10px 0 0;
  padding: 6px 12px;
  border-radius: 20px;
  background: #eee;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
  color: #777;
  cursor: pointer;
}
button {
  border: 0;
  margin-top: 20px;
  padding: 10px 20px;
  border-radius: 20px;
  background: #0b6dff;
  color: white;
}
.submit {
  text-align: center;
}
.passerror {
  color: red;
  text-anchor: middle;
}
</style>

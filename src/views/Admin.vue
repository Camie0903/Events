<template>
  <div class="row">
    <span>
      <ul>
        <li class="talk">C-A-S-H</li>
        <li class="active">EVENTS</li>
      </ul>
    </span>

    <div class="filter-ui">
      <label for="filters">Show me</label>
      <div class="styled-select">
        <select name="accountStatus" id="filters">
          <option value="active">All Events</option>
          <option value="active">public</option>
          <option value="active">private</option>
          <optgroup label="Audience">
            <option value="Guest">Guest</option>
          </optgroup>
          <optgroup label="Organization">
            <option value="Admins">Admins</option>
          </optgroup>
        </select>
      </div>

      <table>
        <tr class="table-header">
          <th>Image URL</th>
          <th>Title</th>
          <th>Date</th>
          <th>Description</th>
          <th class="statusHead">Type</th>
        </tr>
        <UserCard v-for="event in Events" :key="event.id" :event="event" />
      </table>
    </div>
  </div>
</template>
<script>
import UserCard from "../components/Admintable.vue";
export default {
  components: { UserCard },
  data() {
    return {
      Events: [],
    };
  },

  mounted() {
    fetch("http://localhost:3000/Events")
      .then((res) => res.json())
      .then((data) => (this.Events = data))
      .catch((err) => console.log(err.message));
  },
};
</script>
<style></style>

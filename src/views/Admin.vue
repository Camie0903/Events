<template>
  <nav>
    <ul>
      <li class="talk">C-A-S-H</li>
      <li class="active">EVENTS</li>
    </ul>
  </nav>

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
        <th>Username</th>
        <th>Email Address</th>
        <th>Date</th>
        <th class="roleHead">Event</th>
        <th class="statusHead">Type</th>
      </tr>
      <tr>
        <td class="username"></td>
        <td class="email"><a href="@email.com"></a></td>
        <td></td>
        <td class="commenter"><i class="fas fa-angle-down"></i></td>
        <td class="activeUser"><i class="fas fa-angle-down"></i></td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {};
</script>
<style></style>

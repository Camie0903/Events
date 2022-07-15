<template>
  <tr>
    <td class="email">
      {{ event.Img }}
    </td>
    <td class="date">
      {{ event.Title }}
    </td>
    <td class="email">
      {{ event.Date }}
    </td>
    <td class="email">
      {{ event.Description }}
    </td>
    <td class="email">
      {{ event.Type }}
    </td>

    <!-- <td class="commenter"><i class="fas fa-angle-down"></i></td>
    <td class="activeUser"><i class="fas fa-angle-down"></i></td> -->
  </tr>
</template>
<script>
export default {
  props: ["event"],
};
</script>
<style></style>

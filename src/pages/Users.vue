<template>
  <div class="">
    <div class="title">
      <div class="text-h4 text-weight-medium">Users</div>
    </div>

    <div class="row justify-between q-my-lg">
      <div class="col-md-4">
        <div>
          <q-input
            outlined
            v-model="keyword"
            placeholder="Filter user"
            dense
            hide-bottom-space
            class="search-field"
            :class="{ 'sb-closed': sfClose }"
            @blur="
              sfClose = true;
              keyword = '';
            "
            @focus="sfClose = false"
            clearable
            clear-icon="close"
          >
            <template v-slot:prepend>
              <q-icon name="search" class="cursor-pointer" />
            </template>
          </q-input>
        </div>
      </div>
      <div class="col-md-4">
        <div class=" ">
          <q-btn outline color="grey-6" label="Popular" no-caps />
          <q-btn outline color="grey-6" label="Name" no-caps />
          <q-btn outline color="grey-6" label="New" no-caps />
          <br />
        </div>
      </div>
    </div>

    <div class="row q-col-gutter-sm">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
        <q-item>
          <q-item-section top avatar>
            <q-avatar rounded size="70px">
              <img
                src="https://image.shutterstock.com/image-photo/portrait-handsome-man-smiling-against-260nw-764366404.jpg"
              />
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label class="text-primary text-weight-bold"
              >onyambu</q-item-label
            >
            <q-item-label caption>Los Angeles</q-item-label>
            <q-item-label caption class="text-weight-bold"
              >Los Angeles</q-item-label
            >
            <q-item-label caption class="text-primary text-weight-bold">
              Los Angeles</q-item-label
            >
          </q-item-section>
        </q-item>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
        <q-item>
          <q-item-section top avatar>
            <q-avatar rounded size="70px">
              <img
                src="https://image.shutterstock.com/image-photo/portrait-handsome-man-smiling-against-260nw-764366404.jpg"
              />
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label class="text-primary text-weight-bold"
              >onyambu</q-item-label
            >
            <q-item-label caption>Los Angeles</q-item-label>
            <q-item-label caption class="text-weight-bold"
              >Los Angeles</q-item-label
            >
            <q-item-label caption class="text-primary text-weight-bold">
              Los Angeles</q-item-label
            >
          </q-item-section>
        </q-item>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
        <q-item>
          <q-item-section top avatar>
            <q-avatar rounded size="70px">
              <img
                src="https://image.shutterstock.com/image-photo/portrait-handsome-man-smiling-against-260nw-764366404.jpg"
              />
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label class="text-primary text-weight-bold"
              >onyambu</q-item-label
            >
            <q-item-label caption>Los Angeles</q-item-label>
            <q-item-label caption class="text-weight-bold"
              >Los Angeles</q-item-label
            >
            <q-item-label caption class="text-primary text-weight-bold">
              Los Angeles</q-item-label
            >
          </q-item-section>
        </q-item>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
        <q-item>
          <q-item-section top avatar>
            <q-avatar rounded size="70px">
              <img
                src="https://image.shutterstock.com/image-photo/portrait-handsome-man-smiling-against-260nw-764366404.jpg"
              />
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label class="text-primary text-weight-bold"
              >onyambu</q-item-label
            >
            <q-item-label caption>Los Angeles</q-item-label>
            <q-item-label caption class="text-weight-bold"
              >Los Angeles</q-item-label
            >
            <q-item-label caption class="text-primary text-weight-bold">
              Los Angeles</q-item-label
            >
          </q-item-section>
        </q-item>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      keyword: "",
      sfClose: true,
    };
  },
};
</script>
<style scoped>
.text-body1 {
  width: 70%;
}
</style>

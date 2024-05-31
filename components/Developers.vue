<template>
  <div class="developers">
    <h2 class="h2">Доступные предожения</h2>
    <nav v-if="totalPages > 1" class="pagination">
      <ul class="pagination">
        <li
          v-for="page in totalPages"
          :key="page"
          class="page-item"
          :class="{ active: page === currentPage }"
          @click="changePage(page)"
        >
          <a class="page-link">{{ page }}</a>
        </li>
      </ul>
    </nav>
    <div
      class="items-container"
      v-for="item in visibleDevelopers"
      :key="item.id"
    >
      <p class="p">{{ item.title.ru }}</p>

      <div class="image-container" @click="toggle(item.id)">
        <img :src="item.images[0]" alt="photo" class="img" />
        <div class="overlay"></div>
      </div>

      <p><span class="bold">Стоимость: </span>{{ item.price }} ₽</p>
    </div>
  </div>
</template>

<script>
import { getDevelopersData } from "~/services/getDevelopers.js";

export default {
  data() {
    return {
      developers: [],
      currentPage: 1,
      itemsPerPage: 5,
    };
  },
  async mounted() {
    try {
      const developers = await getDevelopersData();
      this.developers = [...developers];
    } catch (e) {
      console.log("No datas in developersList");
    }
  },
  computed: {
    visibleDevelopers() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.developers?.slice(startIndex, endIndex);
    },
    totalPages() {
      return Math.ceil(this.developers?.length / this.itemsPerPage);
    },
  },
  methods: {
    changePage(page) {
      this.currentPage = page;
    },

    toggle(id) {
      this.$router.push(`/developer/${id}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.image-container {
  width: 100%;
  min-height: 40vh;
  position: relative;
  overflow: hidden;
}
.items-container {
  display: flex;
  align-items: start;
  flex-direction: column;
  gap: 10px;
  margin-top: 30px;
}

.bold {
  font-weight: 600;
}
.pagination {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.page-item {
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 5px;
}
.page-link {
  font-size: 20px;
}
.active {
  background: #d9d9d9;
  color: #ffffff;
}

.image {
  display: block;
  width: 100%;
  height: auto;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.image-container:hover .overlay {
  opacity: 1;
}
</style>

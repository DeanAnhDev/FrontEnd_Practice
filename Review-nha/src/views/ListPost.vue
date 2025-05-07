<script setup>
import PostIcon from '../components/icons/PostIcon.vue'
import HeartPostIcon from '../components/icons/HeartPostIcon.vue'
import ArrowIcon from '@/components/icons/ArrowIcon.vue'
import PlayVideoIcon from '@/components/icons/PlayVideoIcon.vue'
</script>

<template>
  <div>
    <section>
      <img
        class="w-[90%] block mx-auto object-cover"
        src="../assets/img/banner/banner.png"
        alt="Banner quảng cáo"
      />
      <div class="flex overflow-x-auto w-[90%] mx-auto my-6 font-custom">
        <div
          class="text-sm/[21px] font-semibold shrink-0 px-9 py-2 border border-2 border-[#007882] rounded-full text-[#fff] bg-[#007882]"
        >
          Tất cả
        </div>
        <div class="text-sm/[21px] font-semibold shrink-0 px-9 py-2">Xã hội</div>
        <div class="text-sm/[21px] font-semibold shrink-0 px-9 py-2">Nhà đất</div>
        <div class="text-sm/[21px] font-semibold shrink-0 px-9 py-2">Đời sống</div>
        <div class="text-sm/[21px] font-semibold shrink-0 px-9 py-2">Video</div>
      </div>
    </section>
    <section>
      <div class="w-fit mx-auto flex items-center gap-2 font-custom font-bold text-[21px] p-2 mb-4">
        <PostIcon />
        <h1>Tin Tức</h1>
      </div>
      <div>
        <div class="relative w-[90%] mx-auto mb-4">
          <img src="../assets/img/post/imagep1.png" alt="" class="w-full h-auto" />

          <div class="absolute top-4 right-4">
            <HeartPostIcon class="w-6 h-6" />
          </div>
          <div>
            <h2 class="line-clamp-2 text-sm/[21px] font-bold text-[#3B4144] mt-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, debitis quidem.
              Facere, et minus dolorem iste temporibus culpa obcaecati voluptate laudantium,
              consectetur quaerat esse. Nesciunt veniam aspernatur voluptas totam quae?
            </h2>
            <div class="flex items-center gap-2 my-1">
              <h3 class="text-sm/[20px] font-semibold text-[#007882]">Xã hội</h3>
              <svg
                width="3"
                height="4"
                viewBox="0 0 3 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="1.5" cy="1.56641" r="1.5" fill="#3B4144" />
              </svg>
              <p class="text-xs">Quang Anh Trần</p>
              <svg
                width="3"
                height="4"
                viewBox="0 0 3 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="1.5" cy="1.56641" r="1.5" fill="#3B4144" />
              </svg>
              <p class="text-xs">24/02/2020</p>
            </div>
            <p class="line-clamp-3 text-sm/[21px] text-[#3B4144] font-normal">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id cupiditate in eius
              voluptas ea assumenda sequi, voluptatibus molestiae ad quod deserunt est delectus
              nulla, ullam nostrum quis vero perferendis deleniti.
            </p>
          </div>
        </div>
        <div>
          <div class="relative w-[90%] mx-auto mb-4">
            <img src="../assets/img/post/imagep2.png" alt="" class="w-full h-auto" />

            <div class="absolute top-4 right-4">
              <HeartPostIcon class="w-6 h-6" />
            </div>
            <div>
              <h2 class="line-clamp-2 text-sm/[21px] font-bold text-[#3B4144] mt-2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, debitis quidem.
                Facere, et minus dolorem iste temporibus culpa obcaecati voluptate laudantium,
                consectetur quaerat esse. Nesciunt veniam aspernatur voluptas totam quae?
              </h2>
              <div class="flex items-center gap-2 my-1">
                <h3 class="text-sm/[20px] font-semibold text-[#007882]">Xã hội</h3>
                <svg
                  width="3"
                  height="4"
                  viewBox="0 0 3 4"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="1.5" cy="1.56641" r="1.5" fill="#3B4144" />
                </svg>
                <p class="text-xs">Quang Anh Trần</p>
                <svg
                  width="3"
                  height="4"
                  viewBox="0 0 3 4"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="1.5" cy="1.56641" r="1.5" fill="#3B4144" />
                </svg>
                <p class="text-xs">24/02/2020</p>
              </div>
              <p class="line-clamp-3 text-sm/[21px] text-[#3B4144] font-normal">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id cupiditate in eius
                voluptas ea assumenda sequi, voluptatibus molestiae ad quod deserunt est delectus
                nulla, ullam nostrum quis vero perferendis deleniti.
              </p>
            </div>
          </div>
          <div class="relative w-[90%] mx-auto mb-4">
            <img src="../assets/img/post/imagep3.png" alt="" class="w-full h-auto" />

            <div class="absolute top-4 right-4">
              <HeartPostIcon class="w-6 h-6" />
            </div>
            <div>
              <h2 class="line-clamp-2 text-sm/[21px] font-bold text-[#3B4144] mt-2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, debitis quidem.
                Facere, et minus dolorem iste temporibus culpa obcaecati voluptate laudantium,
                consectetur quaerat esse. Nesciunt veniam aspernatur voluptas totam quae?
              </h2>
              <div class="flex items-center gap-2 my-1">
                <h3 class="text-sm/[20px] font-semibold text-[#007882]">Xã hội</h3>
                <svg
                  width="3"
                  height="4"
                  viewBox="0 0 3 4"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="1.5" cy="1.56641" r="1.5" fill="#3B4144" />
                </svg>
                <p class="text-xs">Quang Anh Trần</p>
                <svg
                  width="3"
                  height="4"
                  viewBox="0 0 3 4"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="1.5" cy="1.56641" r="1.5" fill="#3B4144" />
                </svg>
                <p class="text-xs">24/02/2020</p>
              </div>
              <p class="line-clamp-3 text-sm/[21px] text-[#3B4144] font-normal">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id cupiditate in eius
                voluptas ea assumenda sequi, voluptatibus molestiae ad quod deserunt est delectus
                nulla, ullam nostrum quis vero perferendis deleniti.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div
        class="flex justify-between items-center font-custom font-semibold text-sm/[21px] mb-4 w-[90%] mx-auto"
      >
        <h2>Video</h2>
        <ArrowIcon />
      </div>
      <div class="relative w-[90%] mx-auto">
        <div class="relative w-full mb-4">
          <img src="../assets/img/post/imagevd1.png" alt="" class="w-full h-auto" />
          <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <PlayVideoIcon class="w-12 h-12 text-white" />
          </div>
        </div>
        <div class="absolute top-4 right-4">
          <HeartPostIcon class="w-6 h-6" />
        </div>
        <div>
          <h2 class="line-clamp-2 text-sm/[21px] font-bold text-[#3B4144] mt-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, debitis quidem.
            Facere, et minus dolorem iste temporibus culpa obcaecati voluptate laudantium,
            consectetur quaerat esse. Nesciunt veniam aspernatur voluptas totam quae?
          </h2>
          <div class="flex items-center gap-2 my-1">
            <p class="text-xs">5542 lượt xem</p>
            <svg
              width="3"
              height="4"
              viewBox="0 0 3 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="1.5" cy="1.56641" r="1.5" fill="#3B4144" />
            </svg>
            <p class="text-xs">24/02/2020</p>
          </div>
        </div>
      </div>

      <div class="relative w-[90%] mx-auto flex overflow-x-auto gap-4">
        <div class="max-w-[75%] shrink-0 relative">
          <div class="relative w-full mb-4">
            <img src="../assets/img/post/imagevd2.png" alt="" class="w-full h-auto" />
            <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <PlayVideoIcon class="w-12 h-12 text-white" />
            </div>
          </div>
          <div class="absolute top-4 right-4">
            <HeartPostIcon class="w-6 h-6" />
          </div>
          <div>
            <h2 class="line-clamp-2 text-sm/[21px] font-bold text-[#3B4144] mt-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, debitis quidem.
              Facere, et minus dolorem iste temporibus culpa obcaecati voluptate laudantium,
              consectetur quaerat esse. Nesciunt veniam aspernatur voluptas totam quae?
            </h2>
            <div class="flex items-center gap-2 my-1">
              <p class="text-xs">5542 lượt xem</p>
              <svg
                width="3"
                height="4"
                viewBox="0 0 3 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="1.5" cy="1.56641" r="1.5" fill="#3B4144" />
              </svg>
              <p class="text-xs">24/02/2020</p>
            </div>
          </div>
        </div>
        <div class="max-w-[75%] shrink-0 relative">
          <div class="relative w-full mb-4">
            <img src="../assets/img/post/imagevd3.png" alt="" class="w-full h-auto" />
            <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <PlayVideoIcon class="w-12 h-12 text-white" />
            </div>
          </div>
          <div class="absolute top-4 right-4">
            <HeartPostIcon class="w-6 h-6" />
          </div>
          <div>
            <h2 class="line-clamp-2 text-sm/[21px] font-bold text-[#3B4144] mt-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, debitis quidem.
              Facere, et minus dolorem iste temporibus culpa obcaecati voluptate laudantium,
              consectetur quaerat esse. Nesciunt veniam aspernatur voluptas totam quae?
            </h2>
            <div class="flex items-center gap-2 my-1">
              <p class="text-xs">5542 lượt xem</p>
              <svg
                width="3"
                height="4"
                viewBox="0 0 3 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="1.5" cy="1.56641" r="1.5" fill="#3B4144" />
              </svg>
              <p class="text-xs">24/02/2020</p>
            </div>
          </div>
        </div>
        <div class="max-w-[75%] shrink-0 relative">
          <div class="relative w-full mb-4">
            <img src="../assets/img/post/imagevd3.png" alt="" class="w-full h-auto" />
            <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <PlayVideoIcon class="w-12 h-12 text-white" />
            </div>
          </div>
          <div class="absolute top-4 right-4">
            <HeartPostIcon class="w-6 h-6" />
          </div>
          <div>
            <h2 class="line-clamp-2 text-sm/[21px] font-bold text-[#3B4144] mt-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, debitis quidem.
              Facere, et minus dolorem iste temporibus culpa obcaecati voluptate laudantium,
              consectetur quaerat esse. Nesciunt veniam aspernatur voluptas totam quae?
            </h2>
            <div class="flex items-center gap-2 my-1">
              <p class="text-xs">5542 lượt xem</p>
              <svg
                width="3"
                height="4"
                viewBox="0 0 3 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="1.5" cy="1.56641" r="1.5" fill="#3B4144" />
              </svg>
              <p class="text-xs">24/02/2020</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="font-custom font-semibold text-sm/[21px] mb-4 w-[90%] mx-auto mt-6">
        <h2>Danh sách tin</h2>
      </div>
      <div class="w-[90%] mx-auto mb-5">
        <div>
          <h2 class="line-clamp-2 text-sm/[21px] font-bold text-[#3B4144] mt-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, debitis quidem.
            Facere, et minus dolorem iste temporibus culpa obcaecati voluptate laudantium,
            consectetur quaerat esse. Nesciunt veniam aspernatur voluptas totam quae?
          </h2>
          <div class="flex items-center gap-2 my-1">
            <h3 class="text-sm/[20px] font-semibold text-[#007882]">Xã hội</h3>
            <svg
              width="3"
              height="4"
              viewBox="0 0 3 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="1.5" cy="1.56641" r="1.5" fill="#3B4144" />
            </svg>
            <p class="text-xs">Quang Anh Trần</p>
            <svg
              width="3"
              height="4"
              viewBox="0 0 3 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="1.5" cy="1.56641" r="1.5" fill="#3B4144" />
            </svg>
            <p class="text-xs">24/02/2020</p>
          </div>
        </div>
        <div class="w-full mb-4">
          <div class="flex justify-center items-center gap-2 relative">
            <img src="../assets/img/post/imagenew1.png" alt="" class="w-[50%]" />
            <div class="absolute bottom-2 left-2">
              <HeartPostIcon class="w-6 h-6" />
            </div>
            <p class="line-clamp-4 text-sm/[21px] text-[#3B4144] font-normal">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id cupiditate in eius
              voluptas ea assumenda sequi, voluptatibus molestiae ad quod deserunt est delectus
              nulla, ullam nostrum quis vero perferendis deleniti.
            </p>
          </div>
        </div>
      </div>
      <div class="w-[90%] mx-auto mb-5">
        <div>
          <h2 class="line-clamp-2 text-sm/[21px] font-bold text-[#3B4144] mt-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, debitis quidem.
            Facere, et minus dolorem iste temporibus culpa obcaecati voluptate laudantium,
            consectetur quaerat esse. Nesciunt veniam aspernatur voluptas totam quae?
          </h2>
          <div class="flex items-center gap-2 my-1">
            <h3 class="text-sm/[20px] font-semibold text-[#007882]">Xã hội</h3>
            <svg
              width="3"
              height="4"
              viewBox="0 0 3 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="1.5" cy="1.56641" r="1.5" fill="#3B4144" />
            </svg>
            <p class="text-xs">Quang Anh Trần</p>
            <svg
              width="3"
              height="4"
              viewBox="0 0 3 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="1.5" cy="1.56641" r="1.5" fill="#3B4144" />
            </svg>
            <p class="text-xs">24/02/2020</p>
          </div>
        </div>
        <div class="w-full mb-4">
          <div class="flex justify-center items-center gap-2 relative">
            <img src="../assets/img/post/imagenew3.png" alt="" class="w-[50%]" />
            <div class="absolute bottom-2 left-2">
              <HeartPostIcon class="w-6 h-6" />
            </div>
            <p class="line-clamp-4 text-sm/[21px] text-[#3B4144] font-normal">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id cupiditate in eius
              voluptas ea assumenda sequi, voluptatibus molestiae ad quod deserunt est delectus
              nulla, ullam nostrum quis vero perferendis deleniti.
            </p>
          </div>
        </div>
      </div>
      <div class="w-[90%] mx-auto mb-5">
        <div>
          <h2 class="line-clamp-2 text-sm/[21px] font-bold text-[#3B4144] mt-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, debitis quidem.
            Facere, et minus dolorem iste temporibus culpa obcaecati voluptate laudantium,
            consectetur quaerat esse. Nesciunt veniam aspernatur voluptas totam quae?
          </h2>
          <div class="flex items-center gap-2 my-1">
            <h3 class="text-sm/[20px] font-semibold text-[#007882]">Xã hội</h3>
            <svg
              width="3"
              height="4"
              viewBox="0 0 3 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="1.5" cy="1.56641" r="1.5" fill="#3B4144" />
            </svg>
            <p class="text-xs">Quang Anh Trần</p>
            <svg
              width="3"
              height="4"
              viewBox="0 0 3 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="1.5" cy="1.56641" r="1.5" fill="#3B4144" />
            </svg>
            <p class="text-xs">24/02/2020</p>
          </div>
        </div>
        <div class="w-full mb-4">
          <div class="flex justify-center items-center gap-2 relative">
            <img src="../assets/img/post/imagenew1.png" alt="" class="w-[50%]" />
            <div class="absolute bottom-2 left-2">
              <HeartPostIcon class="w-6 h-6" />
            </div>
            <p class="line-clamp-4 text-sm/[21px] text-[#3B4144] font-normal">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id cupiditate in eius
              voluptas ea assumenda sequi, voluptatibus molestiae ad quod deserunt est delectus
              nulla, ullam nostrum quis vero perferendis deleniti.
            </p>
          </div>
        </div>
      </div>
      <div class="w-[90%] mx-auto mb-5">
        <div>
          <h2 class="line-clamp-2 text-sm/[21px] font-bold text-[#3B4144] mt-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, debitis quidem.
            Facere, et minus dolorem iste temporibus culpa obcaecati voluptate laudantium,
            consectetur quaerat esse. Nesciunt veniam aspernatur voluptas totam quae?
          </h2>
          <div class="flex items-center gap-2 my-1">
            <h3 class="text-sm/[20px] font-semibold text-[#007882]">Xã hội</h3>
            <svg
              width="3"
              height="4"
              viewBox="0 0 3 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="1.5" cy="1.56641" r="1.5" fill="#3B4144" />
            </svg>
            <p class="text-xs">Quang Anh Trần</p>
            <svg
              width="3"
              height="4"
              viewBox="0 0 3 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="1.5" cy="1.56641" r="1.5" fill="#3B4144" />
            </svg>
            <p class="text-xs">24/02/2020</p>
          </div>
        </div>
        <div class="w-full mb-4">
          <div class="flex justify-center items-center gap-2 relative">
            <img src="../assets/img/post/imagenew4.png" alt="" class="w-[50%]" />
            <div class="absolute bottom-2 left-2">
              <HeartPostIcon class="w-6 h-6" />
            </div>
            <p class="line-clamp-4 text-sm/[21px] text-[#3B4144] font-normal">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id cupiditate in eius
              voluptas ea assumenda sequi, voluptatibus molestiae ad quod deserunt est delectus
              nulla, ullam nostrum quis vero perferendis deleniti.
            </p>
          </div>
        </div>
      </div>

      <div class="flex justify-center mb-10">
        <button
          class="px-10 py-2 border border-2 border-[#3B4144] rounded-full text-[#3B4144] font-semibold"
        >
          Xem thêm
        </button>
      </div>
    </section>
  </div>
</template>
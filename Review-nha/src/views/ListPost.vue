<script setup>
import PostIcon from '../components/icons/PostIcon.vue'
import HeartPostIcon from '../components/icons/HeartPostIcon.vue'
import ArrowIcon from '@/components/icons/ArrowIcon.vue'
import PlayVideoIcon from '@/components/icons/PlayVideoIcon.vue'
</script>

<template>
  <div class="mx-auto">
    <section class="mx-auto">
      <div class="relative w-[90%] mx-auto">
  <img
    class="block w-full object-cover cursor-pointer"
    src="../assets/img/banner/banner.png"
    alt="Banner quảng cáo"
  />
  <div class="absolute top-1/2 left-30 -translate-y-1/2 hidden lg:block">
    <h1 class="text-white text-[52px] font-bold font-custom font-header-custom ">Review nhà</h1>
    <p class="text-white text-[30px] text-sm font-normal font-custom font-header-custom ">Finding your best home</p>
  </div>
</div>



      <div class="flex overflow-x-auto w-[90%] mx-auto my-6 font-custom xl:w-[1024px]">
        <div
          class="text-sm/[21px] font-semibold shrink-0 px-9 py-2 border border-2 lg:text-lg border-[#007882] rounded-full text-white bg-[#007882] cursor-pointer"
        >
          Tất cả
        </div>
        <div
          class="text-sm/[21px] font-semibold shrink-0 px-9 py-2 lg:text-lg rounded-full transition duration-300 ease-in-out hover:bg-[#007882] hover:text-white hover:border hover:border-[#007882] cursor-pointer"
        >
          Xã hội
        </div>
        <div
          class="text-sm/[21px] font-semibold shrink-0 px-9 py-2 lg:text-lg rounded-full transition duration-300 ease-in-out hover:bg-[#007882] hover:text-white hover:border hover:border-[#007882] cursor-pointer"
        >
          Nhà đất
        </div>
        <div
          class="text-sm/[21px] font-semibold shrink-0 px-9 py-2 lg:text-lg rounded-full transition duration-300 ease-in-out hover:bg-[#007882] hover:text-white hover:border hover:border-[#007882] cursor-pointer"
        >
          Đời sống
        </div>
        <div
          class="text-sm/[21px] font-semibold shrink-0 px-9 py-2 lg:text-lg rounded-full transition duration-300 ease-in-out hover:bg-[#007882] hover:text-white hover:border hover:border-[#007882] cursor-pointer"
        >
          Video
        </div>
      </div>
    </section>
    <!-- list post -->
    <section id="list-post" class="w-[90%] mx-auto lg:mx-auto xl:w-[1024px]">
      <div
        class="w-fit mx-auto flex items-center gap-2 font-custom font-bold text-[21px] p-2 mb-4 lg:text-[32px]"
      >
        <PostIcon class="lg:w-10 h-10" />
        <h1>Tin Tức</h1>
      </div>
      <div class="grid gap-6 lg:grid-cols-12">
        <div class="relative w-full mb-4 col-span-12 lg:col-span-8 lg:col-start-1">
          <router-link to="/postdetail">
            <img
              src="../assets/img/post/imagep1.png"
              alt=""
              class="w-full h-auto rounded-md object-cover"
            />
            <div class="absolute top-4 right-4">
              <HeartPostIcon class="w-6 h-6" />
            </div>
            <div>
              <h2
                class="line-clamp-2 text-sm/[21px] font-bold text-[#3B4144] mt-2 lg:text-lg/[27px]"
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, debitis quidem.
                Facere, et minus dolorem iste temporibus culpa obcaecati voluptate laudantium,
                consectetur quaerat esse. Nesciunt veniam aspernatur voluptas totam quae?
              </h2>
              <div class="flex items-center gap-2 my-1">
                <h3 class="text-sm/[20px] font-semibold text-[#007882]">Xã hội</h3>
                <span class="w-[3px] h-[3px] bg-[#3B4144] rounded-full"></span>
                <p class="text-xs">Quang Anh Trần</p>
                <span class="w-[3px] h-[3px] bg-[#3B4144] rounded-full"></span>
                <p class="text-xs">24/02/2020</p>
              </div>
              <p class="line-clamp-3 text-sm/[21px] text-[#3B4144] font-normal lg:text-base/[28px]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id cupiditate in eius
                voluptas ea assumenda sequi, voluptatibus molestiae ad quod deserunt est delectus
                nulla, ullam nostrum quis vero perferendis deleniti.
              </p>
            </div>
          </router-link>
        </div>

        <div class="col-span-12 lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
          <!-- Post 1 -->
          <router-link to="/postdetail">
            <div class="relative w-full mb-4">
              <img
                src="../assets/img/post/imagep2.png"
                alt=""
                class="w-full h-auto rounded-md object-cover"
              />
              <div class="absolute top-4 right-4">
                <HeartPostIcon class="w-6 h-6" />
              </div>
              <div>
                <h2
                  class="line-clamp-2 text-sm/[21px] font-bold text-[#3B4144] mt-2 lg:text-lg/[27px]"
                >
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, debitis quidem...
                </h2>
                <div class="flex items-center gap-2 my-1">
                  <h3 class="text-sm/[20px] font-semibold text-[#007882]">Xã hội</h3>
                  <span class="w-[3px] h-[3px] bg-[#3B4144] rounded-full"></span>
                  <p class="text-xs">Quang Anh Trần</p>
                  <span class="w-[3px] h-[3px] bg-[#3B4144] rounded-full"></span>
                  <p class="text-xs">24/02/2020</p>
                </div>
                <p class="line-clamp-3 text-sm/[21px] text-[#3B4144] font-normal lg:hidden">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id cupiditate in eius...
                </p>
              </div>
            </div>
          </router-link>

          <router-link to="/postdetail">
            <div class="relative w-full mb-4">
              <img
                src="../assets/img/post/imagep3.png"
                alt=""
                class="w-full h-auto rounded-md object-cover"
              />
              <div class="absolute top-4 right-4">
                <HeartPostIcon class="w-6 h-6" />
              </div>
              <div>
                <h2
                  class="line-clamp-2 text-sm/[21px] font-bold text-[#3B4144] mt-2 lg:text-lg/[27px]"
                >
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, debitis quidem...
                </h2>
                <div class="flex items-center gap-2 my-1">
                  <h3 class="text-sm/[20px] font-semibold text-[#007882]">Xã hội</h3>
                  <span class="w-[3px] h-[3px] bg-[#3B4144] rounded-full"></span>
                  <p class="text-xs">Quang Anh Trần</p>
                  <span class="w-[3px] h-[3px] bg-[#3B4144] rounded-full"></span>
                  <p class="text-xs">24/02/2020</p>
                </div>
                <p class="line-clamp-3 text-sm/[21px] text-[#3B4144] font-normal lg:hidden">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id cupiditate in eius...
                </p>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </section>
    <!-- video -->
    <section id="video " class="lg:mx-auto mx-auto">
      <div
        class="flex justify-between items-center font-custom font-semibold text-sm/[21px] mb-4 w-[90%] mx-auto lg:mt-10 xl:w-[1024px]"
      >
        <h2>Video</h2>

        <p class="font-normal text-gray-500 text-sm hidden md:block cursor-pointer">Xem tất cả</p>

        <ArrowIcon class="md:hidden" />
      </div>

      <div class="w-[90%] mx-auto flex flex-col lg:flex-row gap-4 items-start xl:w-[1024px]">
        <!-- Video chính -->
        
        <div class="basis-8/12">
            <router-link to="/postdetail">

            <div class="relative w-full mb-4">
              <img
                src="../assets/img/post/video1.jpg"
                alt=""
                class="w-full aspect-[16/9] object-cover rounded-4xl lg:h-[400px]"
              />
              <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-3/3 transform lg:-translate-x-1/2 lg:-translate-y-1/2">
                <PlayVideoIcon class="w-12 h-12 text-white" />
              </div>
              <div class="absolute top-4 right-4">
                <HeartPostIcon class="w-6 h-6" />
              </div>
  
              <div
                class="lg:absolute inset-0 bg-gradient-to-t from-[#00000080] to-[#00000000] rounded-4xl"
              ></div>
  
              <div class="lg:absolute bottom-5 left-5 lg:text-[#fff]">
                <h2
                  class="line-clamp-2 text-sm/[21px] font-bold text-[#3B4144] mt-2 lg:text-[#fff] lg:text-lg/[27px]"
                >
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit...
                </h2>
                <div class="flex items-center gap-2 my-1">
                  <p class="text-xs lg:text-sm/[21px]">5542 lượt xem</p>
                  <div class="w-[3px] h-[3px] bg-[#3B4144] rounded-full lg:bg-[#fff]"></div>
                  <p class="text-xs lg:text-sm/[21px] lg:text-[#FFFFFF] lg:font-normal">24/02/2020</p>
                </div>
              </div>
            </div>

          </router-link>
          </div>

        <!-- Danh sách video nhỏ -->
        <div
          class="flex lg:flex-col basis-4/12 gap-4 h-full overflow-x-auto w-full lg:overflow-y-auto mt-4 lg:mt-0 lg:h-[400px]"
        >
        <!-- video nhỏ -->
        <div class="w-[60%] md:w-[30%] lg:w-[95%] shrink-0 relative">
            <router-link to="/postdetail">
            <div class="relative w-full mb-2">
              <img src="../assets/img/post/imagevd2.png" alt="" />
              <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <PlayVideoIcon class="w-12 h-12 text-white" />
              </div>
            </div>

            <HeartPostIcon class="absolute top-4 right-4 sm:hidden" />

            <div>
              <h2 class="line-clamp-2 text-sm/[21px] font-bold text-[#3B4144] mt-2">
                Lorem ipsum dolor sit, amet consectetur...
              </h2>
              <div class="flex items-center gap-2 my-1">
                <p class="text-xs">5542 lượt xem</p>
                <div class="w-[3px] h-[3px] bg-[#3B4144] rounded-full"></div>
                <p class="text-xs">24/02/2020</p>
              </div>
            </div>

          </router-link>
          </div>

          <div class="w-[60%] md:w-[30%] lg:w-[95%] shrink-0 relative">
            <router-link to="/postdetail">
            <div class="relative w-full mb-2">
              <img src="../assets/img/post/imagevd3.png" alt="" />
              <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <PlayVideoIcon class="w-12 h-12 text-white" />
              </div>
            </div>

            <HeartPostIcon class="absolute top-4 right-4 sm:hidden" />

            <div>
              <h2 class="line-clamp-2 text-sm/[21px] font-bold text-[#3B4144] mt-2">
                Lorem ipsum dolor sit, amet consectetur...
              </h2>
              <div class="flex items-center gap-2 my-1">
                <p class="text-xs">5542 lượt xem</p>
                <div class="w-[3px] h-[3px] bg-[#3B4144] rounded-full"></div>
                <p class="text-xs">24/02/2020</p>
              </div>
            </div>

          </router-link>
          </div>

          <div class="w-[60%] md:w-[30%] lg:w-[95%] shrink-0 relative">
            <router-link to="/postdetail">
            <div class="relative w-full mb-2">
              <img src="../assets/img/post/imagevd2.png" alt="" />
              <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <PlayVideoIcon class="w-12 h-12 text-white" />
              </div>
            </div>

            <HeartPostIcon class="absolute top-4 right-4 sm:hidden" />

            <div>
              <h2 class="line-clamp-2 text-sm/[21px] font-bold text-[#3B4144] mt-2">
                Lorem ipsum dolor sit, amet consectetur...
              </h2>
              <div class="flex items-center gap-2 my-1">
                <p class="text-xs">5542 lượt xem</p>
                <div class="w-[3px] h-[3px] bg-[#3B4144] rounded-full"></div>
                <p class="text-xs">24/02/2020</p>
              </div>
            </div>

          </router-link>
          </div>
          <div class="w-[60%] md:w-[30%] lg:w-[95%] shrink-0 relative">
            <router-link to="/postdetail">
            <div class="relative w-full mb-2">
              <img src="../assets/img/post/imagevd2.png" alt="" />
              <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <PlayVideoIcon class="w-12 h-12 text-white" />
              </div>
            </div>

            <HeartPostIcon class="absolute top-4 right-4 sm:hidden" />

            <div>
              <h2 class="line-clamp-2 text-sm/[21px] font-bold text-[#3B4144] mt-2">
                Lorem ipsum dolor sit, amet consectetur...
              </h2>
              <div class="flex items-center gap-2 my-1">
                <p class="text-xs">5542 lượt xem</p>
                <div class="w-[3px] h-[3px] bg-[#3B4144] rounded-full"></div>
                <p class="text-xs">24/02/2020</p>
              </div>
            </div>

          </router-link>
          </div>
        </div>
      </div>
    </section>
    <!-- danh sách tin -->
    <section id="news " class="lg:mx-auto mx-auto">
      <div class="font-custom font-semibold text-sm/[21px] mb-4 w-[90%] mx-auto mt-6 xl:w-[1024px]">
        <h2>Danh sách tin</h2>
      </div>

      <router-link to="/postdetail">
        <!-- new 1 -->
        <div class="w-[90%] mx-auto mb-5 xl:w-[1024px]">
          <!-- mobile -->
          <div class="block md:hidden">
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
  
          <!-- desktop -->
          <div class="w-full mb-4">
            <div class="relative grid md:grid-cols-12 gap-4 items-start">
              <div class="md:col-span-5 lg:col-span-4 relative">
                <img src="../assets/img/post/imagenew1.png" alt="" class="md:grid-cols-5" />
                <div class="absolute bottom-5 left-5 md:top-5 md:right-5 md:bottom-auto md:left-auto">
                  <HeartPostIcon class="w-6 h-6" />
                </div>
              </div>
  
              <!--  -->
              <div class="md:col-span-7 lg:col-span-8 ml-2">
                <div class="hidden md:block">
                  <h2
                    class="line-clamp-2 text-lg/[21px] font-bold text-[#3B4144] mt-2 lg:text-lg/[27px]"
                  >
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, debitis quidem.
                    Facere, et minus dolorem iste temporibus culpa obcaecati voluptate laudantium,
                    consectetur quaerat esse. Nesciunt veniam aspernatur voluptas totam quae?
                  </h2>
  
                  <div class="flex items-center gap-2 my-1">
                    <h3 class="text-sm/[27px] font-semibold text-[#007882]">Xã hội</h3>
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
                <div>
                  <p
                    class="line-clamp-4 text-sm/[21px] text-[#3B4144] font-normal lg:text-base/[28px]"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id cupiditate in eius
                    voluptas ea assumenda sequi, voluptatibus molestiae ad quod deserunt est delectus
                    nulla, ullam nostrum quis vero perferendis deleniti.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </router-link>

      <router-link to="/postdetail">
        <!-- new 2 -->
        <div class="w-[90%] mx-auto mb-5 xl:w-[1024px]">
          <!-- mobile -->
          <div class="block md:hidden">
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
  
          <!-- desktop -->
          <div class="w-full mb-4">
            <div class="relative grid md:grid-cols-12 gap-4 items-start">
              <div class="md:col-span-5 lg:col-span-4 relative">
                <img src="../assets/img/post/imagenew2.png" alt="" class="md:grid-cols-5" />
                <div class="absolute bottom-5 left-5 md:top-5 md:right-5 md:bottom-auto md:left-auto">
                  <HeartPostIcon class="w-6 h-6" />
                </div>
              </div>
  
              <!--  -->
              <div class="md:col-span-7 lg:col-span-8 ml-2">
                <div class="hidden md:block">
                  <h2
                    class="line-clamp-2 text-lg/[21px] font-bold text-[#3B4144] mt-2 lg:text-lg/[27px]"
                  >
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, debitis quidem.
                    Facere, et minus dolorem iste temporibus culpa obcaecati voluptate laudantium,
                    consectetur quaerat esse. Nesciunt veniam aspernatur voluptas totam quae?
                  </h2>
  
                  <div class="flex items-center gap-2 my-1">
                    <h3 class="text-sm/[27px] font-semibold text-[#007882]">Xã hội</h3>
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
                <div>
                  <p
                    class="line-clamp-4 text-sm/[21px] text-[#3B4144] font-normal lg:text-base/[28px]"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id cupiditate in eius
                    voluptas ea assumenda sequi, voluptatibus molestiae ad quod deserunt est delectus
                    nulla, ullam nostrum quis vero perferendis deleniti.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </router-link>

      <router-link to="/postdetail">
        <!-- new 3 -->
        <div class="w-[90%] mx-auto mb-5 xl:w-[1024px]">
          <!-- mobile -->
          <div class="block md:hidden">
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
  
          <!-- desktop -->
          <div class="w-full mb-4">
            <div class="relative grid md:grid-cols-12 gap-4 items-start">
              <div class="md:col-span-5 relative lg:col-span-4">
                <img src="../assets/img/post/imagenew3.png" alt="" class="md:grid-cols-5" />
                <div class="absolute bottom-5 left-5 md:top-5 md:right-5 md:bottom-auto md:left-auto">
                  <HeartPostIcon class="w-6 h-6" />
                </div>
              </div>
  
              <!--  -->
              <div class="md:col-span-7 lg:col-span-8 ml-2">
                <div class="hidden md:block">
                  <h2
                    class="line-clamp-2 text-lg/[21px] font-bold text-[#3B4144] mt-2 lg:text-lg/[27px]"
                  >
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, debitis quidem.
                    Facere, et minus dolorem iste temporibus culpa obcaecati voluptate laudantium,
                    consectetur quaerat esse. Nesciunt veniam aspernatur voluptas totam quae?
                  </h2>
  
                  <div class="flex items-center gap-2 my-1">
                    <h3 class="text-sm/[27px] font-semibold text-[#007882]">Xã hội</h3>
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
                <div>
                  <p
                    class="line-clamp-4 text-sm/[21px] text-[#3B4144] font-normal lg:text-base/[28px]"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id cupiditate in eius
                    voluptas ea assumenda sequi, voluptatibus molestiae ad quod deserunt est delectus
                    nulla, ullam nostrum quis vero perferendis deleniti.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </router-link>

      <router-link to="/postdetail">
        <!-- new 4 -->
        <div class="w-[90%] mx-auto mb-5 xl:w-[1024px]">
          <!-- mobile -->
          <div class="block md:hidden">
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
  
          <!-- desktop -->
          <div class="w-full mb-4">
            <div class="relative grid md:grid-cols-12 gap-4 items-start">
              <div class="md:col-span-5 lg:col-span-4 relative">
                <img src="../assets/img/post/imagenew4.png" alt="" class="md:grid-cols-5" />
                <div class="absolute bottom-5 left-5 md:top-5 md:right-5 md:bottom-auto md:left-auto">
                  <HeartPostIcon class="w-6 h-6" />
                </div>
              </div>
  
              <!--  -->
              <div class="md:col-span-7 lg:col-span-8 ml-2">
                <div class="hidden md:block">
                  <h2
                    class="line-clamp-2 text-lg/[21px] font-bold text-[#3B4144] mt-2 lg:text-lg/[27px]"
                  >
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, debitis quidem.
                    Facere, et minus dolorem iste temporibus culpa obcaecati voluptate laudantium,
                    consectetur quaerat esse. Nesciunt veniam aspernatur voluptas totam quae?
                  </h2>
  
                  <div class="flex items-center gap-2 my-1">
                    <h3 class="text-sm/[27px] font-semibold text-[#007882]">Xã hội</h3>
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
                <div>
                  <p
                    class="line-clamp-4 text-sm/[21px] text-[#3B4144] font-normal lg:text-base/[28px]"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id cupiditate in eius
                    voluptas ea assumenda sequi, voluptatibus molestiae ad quod deserunt est delectus
                    nulla, ullam nostrum quis vero perferendis deleniti.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </router-link>

      <div class="flex justify-center mb-10">
  <button
    class="px-10 py-2 border-2 border-[#3B4144] rounded-full text-[#3B4144] font-semibold
           hover:bg-[#3B4144] hover:text-white hover:shadow-md transition duration-300 cursor-pointer"
  >
    Xem thêm
  </button>
</div>

    </section>
  </div>
</template>
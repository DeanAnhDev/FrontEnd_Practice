<template>
  <div class="w-[90%] mx-auto ">
    <section class="xl:w-[1024px] mx-auto ">
      <div class="flex justify-between items-center mb-4">
        <div class="flex items-center gap-2">
          <svg
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.3335 13.1663L5.66683 8.49967L10.3335 3.83301"
              stroke="#3B4144"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <router-link to="/">
            <span class="text-sm text-[#D93C23] font-semibold">Quay lại</span>
          </router-link>
        </div>
        <div class="flex items-center gap-2">
          <span class="hidden md:block text-sm/[21px] font-semibold text-[#3B4144]">
            Chuyên mục:
          </span>
          <div
            class="text-sm/[21px] font-semibold shrink-0 px-8 py-1 border border-2 border-[#007882] rounded-full text-[#fff] bg-[#007882]"
          >
            Xã hội
          </div>
        </div>
      </div>
      <h1 class="text-3xl/[40px] font-bold text-[#3B4144]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel veniam ipsum suscipit a
        eligendi exercitationem facere omnis, tempora modi!
      </h1> 

      <div class="md:flex justify-between items-center gap-2 my-4">
        <div class="flex items-center gap-2 my-4">
          <h3 class="text-sm/[20px] sm:text-base/[27px] font-semibold text-[#007882]">Xã hội</h3>
          <svg
            width="3"
            height="4"
            viewBox="0 0 3 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="1.5" cy="1.56641" r="1.5" fill="#3B4144" />
          </svg>
          <p class="text-xs sm:text-base/[27px]">Quang Anh Trần</p>
          <svg
            width="3"
            height="4"
            viewBox="0 0 3 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="1.5" cy="1.56641" r="1.5" fill="#3B4144" />
          </svg>
          <p class="text-xs sm:text-base/[27px]">24/02/2020</p>
        </div>
        <div class="flex items-center gap-2 my-4">
          <button class="border boder-[#CCCCCC] bg-[#CCCCCC] px-10 lg:py-1 rounded-full  md:px-4 flex items-center gap-2">
            <EmailIcon class="w-6 h-6" />
            <span class="text-[#fff] hidden lg:block">Gửi mail</span>
          </button>
          <button class="border boder-[#CCCCCC] bg-[#395185] px-10 lg:py-1  rounded-full md:px-4 flex items-center gap-2" >
            <FacebookIcon class="w-6 h-6" />
            <span class="hidden text-[#fff] lg:block">Chia sẻ</span>
          </button>
          <button class="border boder-[#CCCCCC] px-10 rounded-full lg:py-1  md:px-4 flex items-center gap-2">
            <HeartIcon class="w-6 h-6" />
            <span class="hidden text-[#000] lg:block">Lưu</span>
          </button>
        </div>
      </div>

      <img src="../assets/img/post-detail/image1.png" alt="" class="my-4" />
      <p class="text-base/[28px] font-normal text-[#3B4144]">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde dolorum obcaecati molestiae
        reprehenderit provident itaque mollitia repudiandae illum harum ex. Ipsum nemo aliquam
        officia et qui cum nostrum, illo reprehenderit.
      </p>
      <p class="text-base/[28px] font-normal text-[#3B4144]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur dolores iste fugit
        quibusdam facilis reiciendis aliquam corrupti et alias, omnis aut non distinctio voluptate
        vel cupiditate quod quas tempore magnam?
      </p>
      <p class="text-base/[28px] font-normal text-[#3B4144]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, vitae rerum.
        Explicabo quisquam, repellendus eius possimus minus dolor, vero fugiat magnam quibusdam
        corrupti molestias soluta aliquid debitis nobis non quam.
      </p>
      <div class="my-4 grid md:grid-cols-12 gap-4">
        <img src="../assets/img/post-detail/image2.png" class="md:col-span-8 col-span-12" alt="" />
        <div class="flex justify-between items-center my-4 col-span-12 md:col-span-4 md:flex-col md:my-0 gap-2">
          <img src="../assets/img/post-detail/image3.png" alt="" class="w-[48%] md:w-[100%] object-contain" />
          <img src="../assets/img/post-detail/image4.png" alt="" class="w-[48%]  md:w-[100%] object-contain" />
        </div>
      </div>
      <h2 class="text-base/[20px] font-semibold text-[#3B4144] my-4 md:text-lg/[27px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit?
      </h2>
      <p class="text-sm/[20px] text-[#3B4144] md:text-base/[27px]">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi temporibus facilis
        quidem doloremque ex! Cumque quo, eum nesciunt at magni illo nihil maxime dolore cupiditate.
        Omnis, et. Quia, voluptate odit.
      </p>
      <p class="text-sm/[20px] text-[#3B4144] md:text-base/[27px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, ad molestias. Est rem dolore
        ducimus, nam hic ipsum impedit fuga! Ipsa voluptatum praesentium, dolorum dolor fugit quia
        natus deleniti beatae.
      </p>

      <ul class="list-disc my-4 pl-6 space-y-4">
        <li class="text-sm/[20px]">
          <strong class="mr-2">Tiêu chí 1:</strong>Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Fugit animi, a eos exercitationem est suscipit commodi, laboriosam et
          voluptas quod nulla sed! Facilis rerum quis nulla sunt magni dolorum quidem?
        </li>
        <li class="text-sm/[20px]">
          <strong class="mr-2">Tiêu chí 2:</strong>Lorem ipsum dolor sit amet consectetur
          adipisicing elit. A corporis suscipit labore expedita quasi explicabo, laudantium error
          quia quos vitae doloremque odio ullam at perferendis sed consectetur dolor veniam maxime?
        </li>
        <li class="text-sm/[20px]">
          <strong class="mr-2">Tiêu chí 3:</strong>Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Esse totam, iusto nihil ipsam est laudantium error quam temporibus
          repellat neque magnam ipsa, architecto rem deserunt quisquam incidunt officiis sequi
          exercitationem.
        </li>
        <li class="text-sm/[20px]">
          <strong class="mr-2">Tiêu chí 4:</strong>Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Blanditiis distinctio odit doloremque esse quis praesentium culpa. Error
          iure provident nesciunt suscipit sint obcaecati amet, dolorem mollitia nemo nam ratione
          accusamus!
        </li>
      </ul>
      <div class="flex items-center gap-2 my-4">
        <div
          class="text-sm/[20px] font-normal text-[#3B4144] my-4 border border-[#E5E5E5] border-solid rounded-full px-6 py-1 w-fit bg-[#E5E5E5]"
        >
          #Keyword 1
        </div>
        <div
          class="text-sm/[20px] font-normal text-[#3B4144] my-4 border border-[#E5E5E5] border-solid rounded-full px-6 py-1 w-fit bg-[#E5E5E5]"
        >
          #Keyword 2
        </div>
      </div>

    </section>
    
   
    <section class="mb-20 xl:w-[1024px] mx-auto">
        <div class="flex justify-between items-center gap-2 my-6">
        <div class="flex items-center gap-2">
          <h2 class="text-sm/[21px] font-semibold text-[#3B4144] mr-2">Tin cùng chuyên mục</h2>
          <div
            class="text-sm/[21px] font-semibold px-8 py-1 border border-2 border-[#007882] rounded-full text-[#fff] bg-[#007882]"
          >
            Xã hội
          </div>
        </div>
        <div>
            <ArrowIcon class="md:hidden"/>
            <span class="hidden md:block text-sm/[21px] font-semibold text-[#3B4144] ">Xem tất cả</span>
        </div>
      </div>
      <div class=" mx-auto mb-5 xl:w-[1024px]">
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
              <img src="../assets/img/post-detail/image5.png" alt="" class=" md:grid-cols-5" />
              <div class="absolute bottom-2 left-2">
                <HeartPostIcon class="w-6 h-6" />
              </div>
            </div>

            <!--  -->
            <div class="md:col-span-7 lg:col-span-8 ml-2">
              <div class="hidden md:block">
                <h2 class="line-clamp-2 text-lg/[21px] font-bold text-[#3B4144] mt-2 lg:text-lg/[27px]">
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
                <p class="line-clamp-4 text-sm/[21px] text-[#3B4144] font-normal lg:text-base/[28px]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id cupiditate in eius
                  voluptas ea assumenda sequi, voluptatibus molestiae ad quod deserunt est delectus
                  nulla, ullam nostrum quis vero perferendis deleniti.
                </p>
              </div>

            </div>
            
          </div>
        </div>
      </div>
      <!-- new 2 -->
      <div class=" mx-auto mb-5 xl:w-[1024px]">
        <!-- mobile -->
        <div class="block md:hidden">
          <h2 class="line-clamp-2 text-sm/[21px] font-bold text-[#3B4144] mt-2 ">
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
              <img src="../assets/img/post-detail/image6.png" alt="" class=" md:grid-cols-5" />
              <div class="absolute bottom-2 left-2">
                <HeartPostIcon class="w-6 h-6" />
              </div>
            </div>

            <!--  -->
            <div class="md:col-span-7 lg:col-span-8 ml-2">
              <div class="hidden md:block">
                <h2 class="line-clamp-2 text-lg/[21px] font-bold text-[#3B4144] mt-2 lg:text-lg/[27px]">
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
                <p class="line-clamp-4 text-sm/[21px] text-[#3B4144] font-normal lg:text-base/[28px]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id cupiditate in eius
                  voluptas ea assumenda sequi, voluptatibus molestiae ad quod deserunt est delectus
                  nulla, ullam nostrum quis vero perferendis deleniti.
                </p>
              </div>

            </div>
            
          </div>
        </div>
      </div>
      
      <div class="flex justify-between items-center gap-2 my-6">
        <div class="flex items-center gap-2">
          <h2 class="text-sm/[21px] font-semibold text-[#3B4144]">Tin thịnh hành</h2>
        </div>
        <div>
            <ArrowIcon class="md:hidden"/>
            <span class="hidden md:block text-sm/[21px] font-semibold text-[#3B4144] ">Xem tất cả</span>
        </div>
      </div>
      <div class=" mx-auto mb-5 xl:w-[1024px]">
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
              <img src="../assets/img/post-detail/image7.png" alt="" class=" md:grid-cols-5" />
              <div class="absolute bottom-2 left-2">
                <HeartPostIcon class="w-6 h-6" />
              </div>
            </div>

            <!--  -->
            <div class="md:col-span-7 lg:col-span-8 ml-2">
              <div class="hidden md:block">
                <h2 class="line-clamp-2 text-lg/[21px] font-bold text-[#3B4144] mt-2 lg:text-lg/[27px]">
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
                <p class="line-clamp-4 text-sm/[21px] text-[#3B4144] font-normal lg:text-base/[28px]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id cupiditate in eius
                  voluptas ea assumenda sequi, voluptatibus molestiae ad quod deserunt est delectus
                  nulla, ullam nostrum quis vero perferendis deleniti.
                </p>
              </div>

            </div>
            
          </div>
        </div>
      </div>
      <!-- new 2 -->
      <div class=" mx-auto mb-5 xl:w-[1024px]">
        <!-- mobile -->
        <div class="block md:hidden">
          <h2 class="line-clamp-2 text-sm/[21px] font-bold text-[#3B4144] mt-2 ">
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
              <img src="../assets/img/post-detail/image8.png" alt="" class=" md:grid-cols-5" />
              <div class="absolute bottom-2 left-2">
                <HeartPostIcon class="w-6 h-6" />
              </div>
            </div>

            <!--  -->
            <div class="md:col-span-7 lg:col-span-8 ml-2">
              <div class="hidden md:block">
                <h2 class="line-clamp-2 text-lg/[21px] font-bold text-[#3B4144] mt-2 lg:text-lg/[27px]">
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
                <p class="line-clamp-4 text-sm/[21px] text-[#3B4144] font-normal lg:text-base/[28px]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id cupiditate in eius
                  voluptas ea assumenda sequi, voluptatibus molestiae ad quod deserunt est delectus
                  nulla, ullam nostrum quis vero perferendis deleniti.
                </p>
              </div>

            </div>
            
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
import HeartIcon from '@/components/icons/HeartIcon.vue';
import ArrowIcon from '../components/icons/ArrowIcon.vue'
import FacebookIcon from '@/components/icons/FacebookIcon.vue';
import EmailIcon from '@/components/icons/EmailIcon.vue';
</script>


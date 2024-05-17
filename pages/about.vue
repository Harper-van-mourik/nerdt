<template>
  <section class="container flex justify-center py-16 md:container">
    <div class="flex flex-col max-w-3xl [&:not(.grid)>p]:py-2">
      <h1 class="font-bold">About Nerdt.nl</h1>

      <p>
        Founded in 2018 by Harper van Mourik, Nerdt.nl is more than just a
        website—it's a haven for front-end developers seeking inspiration,
        expertise, and design.
      </p>

      <p class="font-bold">What We Offer:</p>

      <p>
        At Nerdt.nl, we're dedicated to empowering front-end developers with the
        tools, tips, and resources they need to excel in their craft. Whether
        you're a seasoned pro or just starting out, you'll find a wealth of
        valuable content here:
      </p>

      <section class="grid grid-cols-1 gap-4 py-4 md:grid-cols-2">
        <BaseCard>
          <template #title>Tricks and Techniques</template>
          Dive deep into our collection of cutting-edge tricks and techniques
          designed to elevate your front-end development skills. From (Tailwind)
          CSS animations to innovative JavaScript hacks, we've got you covered.
        </BaseCard>

        <BaseCard>
          <template #title>Code Snippets</template>
          Need a quick solution to a common coding problem? Look no further than
          our extensive library of code snippets. From responsive layouts to
          interactive UI elements, you'll find code snippets for every occasion.
        </BaseCard>

        <BaseCard class="md:col-span-2">
          <template #title>Design Inspiration</template>
          Stuck in a design rut? Browse our curated gallery of stunning designs
          for fresh inspiration. Whether you're working on a website, web app,
          or mobile app, you'll find plenty of ideas to spark your creativity.
        </BaseCard>
      </section>

      <p class="font-bold">Our Mission:</p>

      <p>
        At Nerdt.nl, our mission is simple: to empower front-end developers to
        create amazing digital experiences. Whether you're building a personal
        portfolio or a cutting-edge web application, we're here to support you
        every step of the way.
      </p>

      <p class="font-bold">Join Us:</p>

      <p>
        By visiting nerdt.nl we concider you already are a nerdt. Be cool and
        share nerdt.nl with friends!
      </p>
    </div>
  </section>
</template>

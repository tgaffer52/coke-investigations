<template>
  <div class="fixed z-0 w-screen h-screen object-cover">
    <img
      src="@/assets/images/w-h-sanitorium.webp"
      alt="Waverly Hills Sanatorium"
      class="w-full h-full"
    />
  </div>
  <div class="relative z-1 flex flex-col gap-y-4 w-full py-4 px-8">
    <h1 class="text-5xl mb-4 text-center barriecito">
      Welcome to Koke Investigations!
    </h1>
    <div
      class="relative mx-auto w-full max-w-[calc(50dvh*16/9)] aspect-video bg-black border-neutral-950 border-4"
    >
      <TvStatic />

      <div
        class="absolute top-[calc(50%-56px)] left-[calc(50%-96.25px)] p-3 text-center bg-neutral-900/40"
        style="font-family: system-ui"
      >
        <v-btn icon="mdi-play" class="mb-4"></v-btn>
        <p>Video cannot be played</p>
      </div>
    </div>
    <v-expansion-panels class="hidden md:relative">
      <v-expansion-panel color="#880808" bg-color="#171717">
        <v-expansion-panel-title class="barriecito">
          Audio Transcription
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <div class="flex flex-col gap-4 p-2">
            <p>
              Koke: Hey Kokies! It's time for another episode of Koke
              Investigations. If this is your first time, my name is Koki
              Yamada, my friends call me Koke. You may not believe it, but I can
              see ghosts, and they are all around us. Not only that, but I can
              help them, too. My team heard about this abandoned hospital in
              Kentucky, and so we went to check it out. As always, I have my
              trusty sidekick and savior Carey behind the camera.
            </p>
            <p>
              This is Waverly Hills Sanatorium. It's supposedly one of the most
              haunted locations in the United States, and it's a big one. I got
              express permission from the owners to be here alone. Don't try
              this at home, kids.
            </p>
            <p>
              Waverly Hills was built in 1910 to house patients of tuberculosis
              that was ravaging America. Back then, tuberculosis was known as
              the "White Plague." I don't know what's white about it. The
              hospital closed in 1961 when penicillin became widespread and
              essentially eradicated tuberculosis overnight.
            </p>
            <p><em>[Creaking as the metal panel opens]</em></p>
            <p>
              See, this is a very good sign for us. Electricity is
              <em>still</em> running through this hospital, all this time! This
              alternating electrical current radiates waves at about 50-60 Hz.
              Imprinted ghosts will take these waves and use them for brain
              function, even after death! Okay, let's go inside.
            </p>
            <p>
              <em
                >[Echoing footsteps. Rustling of packs and the occasional metal
                clang.]</em
              >
            </p>
            <p>
              Koke: Okay, so I've heard a lot of stories about Room 502, and
              we'll make our way upstairs pretty soon, but I was just wandering
              the halls and thought I saw something.
            </p>
            <p>
              Yeah, yeah, yeah, Carey, come here. See, through that door in that
              patient's room? I think see a woman.
            </p>
            <p>
              It looks like she has... a white kind of smock, but it's very
              dirty. I think that's blood. Remember, these are the ghost's image
              of itself, but very often their image right before death. That's
              the strongest imprint on them. Her hair is all frazzled, I guess
              that's not suprising. She's incredibly thin, also not surprising.
              Okay... I'm gonna open the door and step inside. As always, I'll
              try to describe what I see, if I see anything, but depending on
              how powerful she is, I might be fully immersed in her world.
              Carey, you know what to do if that happens.
            </p>
            <p><em>[Rustling]</em></p>
            <p>
              Koke: This is my ghost protection helmet. It blocks low electrical
              frequencies and keeps the ghosts from messing with my mind. Carey
              is wearing one already.
            </p>
            <p><em>[Two sharp metal clangs]</em></p>
            <p>
              Koke: If anything happens, like if I"m paralyzed or I start
              hurting myself, then Carey will charge in like a white knight and
              put the helmet on me. It's rare that I need it, but oh so
              essential. Alright, I'm going in...
            </p>
            <p>
              Koke: Okay, wow... From what I'm seeing, this hospital looks brand
              new, though not much better. Patients are passing by me outside.
              If I had to guess, this is the early 20th century. Ah, there she
              is, I see her. She's arguing with the doctors. Well, I wouldn't
              say arguing. She's screaming and flailing around. The doctors have
              her pinned down. Wow, she's strong for that constitution, she
              threw one of the doctors off. Oh, she's coughing. I see a lot of
              blood. Definitely late stage tuberculosis. Okay, she's stopped
              moving--oh, shit!
            </p>
            <p>
              <em>[Loud thump. Koke screams. His screams get louder.]</em>
            </p>
            <p>Koke: Ah, my eyes! Carey! Carey! Helmet!</p>
            <p><em>[Rustling. Footsteps. Heavy breathing.]</em></p>
            <p>
              Koke: Okay, uh... God, I... she just came at me. She was
              scratching out my eyes. I couldn't stop her. It felt so real, like
              I still can't believe my eyes are fine... I need a minute...
            </p>
            <p><em>[Water glurping sounds]</em></p>
            <p>
              Okay, that's a Class 3 or 4 by Ghost Protocol Standards. I'd say
              Class 3. She knew I was there and wanted to hurt me. She wasn't
              just reliving the moment. That's probably one of the scariest
              encounters I've ever had.
            </p>
            <p>
              Alright guys, that's it for Waverly Hills for now. Sorry to cut it
              short, but what a spicy ending, huh? If you guys want me to go
              back, let me know in the comments, but I would need to take a long
              break before that. As always, hit that like button, subscribe, and
              I'll see you at the next haunting.
            </p>
            <p><em>[Outro Music]</em></p>
          </div>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
    <div class="w-full flex justify-end">
      <p class="bg-black/60 text-xs text-slate-400 text-end">
        Image courtesy of
        <a
          href="https://commons.wikimedia.org/wiki/File:Waverly_Hills_Sanatorium_2018.jpg"
          target="_blank"
          class="text-blue-500 underline"
          >Royasfoto73, CC BY-SA 4.0</a
        >, via Wikimedia Commons. <br />Saturation, contrast, and brightness
        filters applied.
        <br />
        Image under Creative Commons license. No copyright infringement
        intended.
      </p>
    </div>
  </div>
</template>

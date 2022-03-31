export default {
    props: {
      item: Object
    },
    template: `
    <section class="section is-medium columns story">
        <div class="column is-6" :class="{ 'is-offset-6': item.isRight }">
            <span class="imgWrap"><img :src="item.image" /></span>
            <p class="">
                {{ $t("message." + item.text) }}
            </p>
            <a v-if="item.button != null" class="button" target="_blank" :href="item.url">{{ $t("message." + item.button) }}</a>
        </div>
    </section>
    `
  }
  
  
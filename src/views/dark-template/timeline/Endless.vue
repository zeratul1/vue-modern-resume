<template>
  <v-card
    color="grey lighten-4"
    light
  >
    <v-card-text class="text-sm-center">
      <h4>好了，工作经历到这儿结束了。但是人生还没有！</h4>
      <div>不信试试看，继续向下滚！</div>
      <content-section class="mt-2">
        <v-timeline>
          <v-timeline-item
            v-for="n in futurePage * 2"
            :key="n"
            icon=""
            large
          >
            <template
              v-slot:icon
            >
              <div class="fill-width">
                <vue-content-loading
                  :width="80"
                  :height="95"
                >
                  <circle
                    cx="40"
                    cy="52"
                    r="42"
                  />
                </vue-content-loading>
              </div>
            </template>

            <vcl-code />
          </v-timeline-item>
        </v-timeline>
      </content-section>
      <div
        v-if="toggleMessage"
        class="ma-4"
      >
        <span
          class="pre"
        >{{ message.text }}</span>
        <div
          v-if="!loading"
          v-scroll="scrolled"
        />
      </div>
      <v-progress-circular
        v-if="loading"
        indeterminate
        color="primary"
      />
    </v-card-text>
  </v-card>
</template>

<script>
import ContentSection from '@/views/dark-template/content/Section'
import VueContentLoading, { VclCode } from 'vue-content-loading'
import { debounce } from 'lodash'

export default {
  name      : 'EndlessTimeline',
  components: {
    ContentSection, VueContentLoading, VclCode,
  },
  data: () => ({
    futurePage   : 0,
    message      : '',
    toggleMessage: true,
    loading      : false,
    messages     : [
      {
        text: '你对力量一无所知！',
        from: 1,
        to  : 1,
      },
      {
        text: '还要更多... :)',
        from: 2,
        to  : 2,
      },
      {
        text: '仍然很好奇？',
        from: 3,
        to  : 3,
      },
      {
        text: '好奇害死猫，对吧?',
        from: 4,
        to  : 4,
      },
      {
        text: '坚持到底...',
        from: 5,
        to  : 5,
      },
      {
        text: '一切皆有可能！',
        from: 6,
        to  : 6,
      },
      {
        text: '好消息是：',
        from: 7,
        to  : 7,
      },
      {
        text: '努力才能成功！',
        from: 8,
        to  : 8,
      },
      {
        text: '全力以赴...',
        from: 9,
        to  : 9,
      },
      {
        text: '你还没有准备好？',
        from: 10,
        to  : 10,
      },
      {
        text: '您啥都不知道呐，囧雪诺。\n到此为止，别往下滚了，快去创造奇迹 👌',
        from: 11,
        to  : null,
      },
    ],
  }),
  methods: {
    scrolled (event) {
      let element   = event.target
      if (!element.scrollTop)
        element = element.documentElement
      // TODO: it's not working correctly on mobile
      if (element.scrollHeight - element.scrollTop <= element.clientHeight + 50)
        this.loadFuture()
    },
    loadFuture: debounce(function () {
      if (this.loading || this.message.to === null)
        return
      this.loading = true
      setTimeout(() => {
        this.loading    = false
        this.futurePage++
        if (!this.message)
          this.message = this.messages[0]
        else if (this.message.to !== null && this.message.to < this.futurePage)
          this.message = this.messages.find((msg) => { return msg.from === this.futurePage })
        else {

        }
        this.toggleMessage = false
        this.toggleMessage = true
      }, 3000)
    }, 500),
  },
}
</script>

<style scoped>
.fill-width {
  width: 100%;
}
.pre {
  white-space: pre;
}
</style>

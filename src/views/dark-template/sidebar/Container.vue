<template>
  <v-card
    color="grey darken-3"
    dark
  >
    <v-card-text>
      <avatar />
      <div class="text-sm-center mb-6 mt-4">
        <h1 class="display-name">
          张扬 <span class="light-blue--text text--lighten-3">Yang</span>
        </h1>
        <span>
          做互联网开发的诚信肥宅
        </span>
      </div>

      <sidebar-section :options="sections.info" />
      <sidebar-section :options="sections.socials" />
      <sidebar-section :options="sections.hobbies">
        <template v-slot:item="{item}">
          <v-chip class="ma-1 hobby-item">
            <v-avatar>
              <v-icon>
                {{ item.icon }}
              </v-icon>
            </v-avatar>
            {{ item.text }}
          </v-chip>
        </template>
      </sidebar-section>
      <sidebar-section :options="sections.languages">
        <template v-slot:items="{items}">
          <v-container pa-0>
            <v-layout
              wrap
              class="text-xs-center"
            >
              <template
                v-for="(item, i) in items"
              >
                <v-flex
                  :key="i"
                  md3
                  sm4
                  xs6
                >
                  <v-progress-circular
                    rotate="360"
                    size="65"
                    width="2"
                    :value="item.value"
                    color="white"
                    class="ma-2"
                  >
                    {{ item.text }}
                  </v-progress-circular>
                </v-flex>
              </template>
            </v-layout>
          </v-container>
        </template>
      </sidebar-section>
    </v-card-text>
  </v-card>
</template>

<script>
import Avatar from '@/views/dark-template/sidebar/Avatar'
import SidebarSection from '@/views/dark-template/sidebar/Section'
export default {
  name      : 'Sidebar',
  components: { SidebarSection, Avatar },
  data () {
    return {
      sections: {
        info: {
          title: '基本信息',
          items: [
            {
              name: '邮箱',
              icon: 'mdi-email',
              text: 'zeratul1986@hotmail.com',
            },
            {
              name: '出生日期',
              icon: 'mdi-cake-variant',
              text: '1986-12-22',
            },
            {
              name: '居住地',
              icon: 'mdi-map-marker',
              text: '江苏，南京',
            },
          ],
        },
        socials: {
          title: '社交账号',
          items: [
            {
              icon: 'mdi-wechat',
              text: 'zeratul1986',
              link: '',
            },
            {
              icon: 'mdi-github',
              text: 'github.com/zeratul1',
              link: 'https://github.com/zeratul1',
            },
          ],
        },
        hobbies: {
          title: '兴趣爱好',
          items: [
            {
              icon: 'mdi-teach',
              text: '爱讨论',
            },
            {
              icon: 'mdi-android-debug-bridge',
              text: '调代码',
            },
            {
              icon: 'mdi-movie',
              text: '看电影',
            },
            {
              icon: 'mdi-book-open',
              text: '阅读',
            },
            {
              icon: 'mdi-puzzle',
              text: '拼图',
            },
            {
              icon: 'mdi-nas',
              text: '仓鼠症',
            },
            {
              icon: 'mdi-beer',
              text: '快乐水',
            },
            {
              icon: 'mdi-baby-bottle',
              text: '奶娃',
            },
            {
              icon: 'mdi-camera',
              text: '摄影',
            },
            {
              icon: 'mdi-grill',
              text: '露营',
            },
            {
              icon: 'mdi-badminton',
              text: '羽毛球',
            },
            {
              icon: 'mdi-nintendo-switch',
              text: '任地狱',
            },
          ],
        },
        languages: {
          title: '语言',
          items: [
            {
              text : '汉语',
              value: 100,
            },
            {
              text : '英语',
              value: 70,
            },
          ],
        },
      },
    }
  },
}
</script>

<style scoped>
.sidebar{
    background: #2e2e2e;
}
.display-name {
  line-height: 1.5;
}
.hobby-item {
  font-size: 13px;
}
.hobby-item .v-avatar {
  margin-left: -4px;
  margin-right: 4px;
}
</style>

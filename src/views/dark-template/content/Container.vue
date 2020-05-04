<template>
  <v-card
    color="grey lighten-4"
    light
  >
    <v-card-text>
      <content-section
        title="自我介绍"
      >
        我是一名互联网前端开发，擅长 WEB 前端相关的开发技术。<br>
        我在 WEB 开发领域有丰富的实践经验，对前端技术始终保持热情。
      </content-section>
      <content-section
        v-if="prouds"
        title="我的优势"
      >
        <v-layout
          v-for="(proud, i) in prouds"
          :key="i"
        >
          <v-flex
            md1
            xs3
          >
            <v-icon right>
              {{ proud.icon }}
            </v-icon>
          </v-flex>
          <v-flex
            md11
            xs9
          >
            <p>
              <strong>{{ proud.text }}</strong><br>
              <small>{{ proud.source }}</small>
            </p>
          </v-flex>
        </v-layout>
      </content-section>
      <content-section
        v-if="educations"
        title="教育经历"
      >
        <v-layout
          v-for="(education, i) in educations"
          :key="i"
        >
          <v-flex md4>
            {{ education.from }} - {{ education.to }}
          </v-flex>
          <v-flex md8>
            <strong v-if="education.title">{{ education.title }}</strong>
            <div v-if="education.location">
              <i>{{ education.location }}</i>
            </div>
            <div v-if="education.description">
              {{ education.description }}
            </div>
          </v-flex>
        </v-layout>
      </content-section>
      <content-section
        v-if="skills"
        id="to-timeline"
        ref="to-timeline"
        title="专业技能"
      >
        <v-layout wrap>
          <template
            v-for="(skill, i) in skills"
          >
            <v-flex
              v-if="skill.divider"
              :key="i"
              md12
              xs12
              mb-4
            />
            <v-flex
              v-else
              :key="i"
              md6
              xs12
            >
              <div
                class="mr-2 ml-2"
              >
                <div class="icon-title">
                  <v-icon
                    small
                  >
                    {{ skill.icon }}
                  </v-icon>
                  {{ skill.title }}
                </div>
                <v-progress-linear
                  class="progress"
                  color="secondary"
                  height="3"
                  :value="skill.value"
                />
              </div>
            </v-flex>
          </template>
        </v-layout>
      </content-section>
    </v-card-text>
  </v-card>
</template>

<script>
import ContentSection from '@/views/dark-template/content/Section'
export default {
  name      : 'MainContent',
  components: { ContentSection },
  data      : () => ({
    prouds: [
      {
        icon  : 'mdi-web',
        text  : 'WEB 技术知识储备广泛，实践经验丰富，能有效应对工程实践中可能出现的各种问题。',
        source: '',
      },
      {
        icon  : 'mdi-widgets',
        text  : '熟悉前端模块，前端工程，能在各种规模，不同特性的项目中进行合理集成。',
        source: '',
      },
      {
        icon  : 'mdi-comment-text',
        text  : '爱讨论，爱交流，团队成员或者社区用户都是好伙伴。',
        source: '',
      },
    ],
    educations: [
      {
        from       : '2004',
        to         : '2008',
        title      : '本科',
        location   : '河海大学',
        description: '设施农业科学与工程',
      },
    ],
    skills: [
      {
        title: 'HTML',
        icon : 'mdi-language-html5',
        value: 80,
      },
      {
        title: 'CSS',
        icon : 'mdi-language-css3',
        value: 80,
      },
      {
        title: 'Javascript',
        icon : 'mdi-language-javascript',
        value: 80,
      },
      {
        title: 'Typescript',
        icon : 'mdi-language-typescript',
        value: 60,
      },
      {
        title: 'Node.js',
        icon : 'mdi-nodejs',
        value: 75,
      },
      {
        title: 'NPM',
        icon : 'mdi-npm',
        value: 75,
      },
      { divider: true },
      {
        title: 'Vue.js Framework',
        icon : 'mdi-vuejs',
        value: 80,
      },
      {
        title: 'React Framework',
        icon : 'mdi-react',
        value: 70,
      },
      {
        title: 'Electron Framework',
        icon : 'mdi-electron-framework',
        value: 70,
      },
      { divider: true },
      {
        title: 'Linux',
        icon : 'mdi-linux',
        value: 60,
      },
      {
        title: 'Bash',
        icon : 'mdi-bash',
        value: 60,
      },
      {
        title: 'Web Protocol',
        icon : 'mdi-protocol',
        value: 75,
      },
      {
        title: 'Web Security',
        icon : 'mdi-security',
        value: 60,
      },
      {
        title: 'Git',
        icon : 'mdi-git',
        value: 60,
      },
      {
        title: 'Regex',
        icon : 'mdi-regex',
        value: 70,
      },
      {
        title: 'SVG',
        icon : 'mdi-svg',
        value: 70,
      },
      {
        title: 'Docker',
        icon : 'mdi-docker',
        value: 60,
      },
    ],
  }),
}
</script>

<style scoped>
.title {
  border-bottom: 2px #bfbfbf solid;
  line-height: 1.5 !important;
}
.progress {
  margin-bottom: 0.5rem;
  margin-top: 0.1rem;
}
.icon-title {
  align-items: center;
  display: flex;
}
.icon-title > .v-icon {
  margin-right: 0.25rem;
}
</style>

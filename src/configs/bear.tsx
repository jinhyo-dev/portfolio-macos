import type { BearData } from "~/types";

const bear: BearData[] = [
  {
    id: "profile",
    title: "Profile",
    icon: "i-icon-park-outline:user-positioning",
    md: [
      {
        id: "about-me",
        title: "About Me",
        file: "markdown/about-me.md",
        icon: "i-icon-park-outline:user",
        excerpt: "김진효 (Jinhyo Kim) | Frontend & Backend Developer"
      },
      {
        id: "github-stats",
        title: "Github Stats",
        file: "markdown/github-stats.md",
        icon: "i-icon-park-outline:github",
        excerpt: "My Github stats and BOJ Tier"
      }
    ]
  },
  {
    id: "project",
    title: "Projects",
    icon: "i-icon-park-outline:web-page",
    md: [
      {
        id: "aurora",
        title: "Aurora",
        file: "https://raw.githubusercontent.com/proj-aurora/.github/main/profile/README.md",
        icon: "i-heroicons-solid:computer-desktop",
        excerpt: "서버의 시스템 상태를 실시간으로 관측할 수 있는 모니터링 시스템",
        link: "https://github.com/proj-aurora"
      },
      {
        id: "green-mileage",
        title: "Green Mileage",
        file: "https://raw.githubusercontent.com/Team-Firewall/.github/main/profile/README.md",
        icon: "i-heroicons-solid:plus-circle",
        excerpt: "경북소프트웨어고.봉양중학교 교내/기숙사 상벌점 관리 시스템",
        link: "https://github.com/Team-Firewall"
      },
      {
        id: "jinhyo-devlog",
        title: "Jinhyo's Devlog",
        file: "https://raw.githubusercontent.com/jinhyo-dev/devlog-front/master/README.md",
        icon: "i-heroicons-solid:command-line",
        excerpt: "개발 블로그 사이트",
        link: "https://github.com//jinhyo-dev/devlog-front"
      },
      {
        id: "fondant",
        title: "퐁당 미디어 콘퍼런스",
        file: "markdown/portfolio/fondant/fondant.md",
        icon: "i-heroicons-solid:film",
        excerpt: "퐁당 미디어 콘퍼런스 2023 홍보 페이지",
        link: "http://fondantconference.kr"
      },
      {
        id: "smart-farm",
        title: "Smart Farm",
        file: "https://raw.githubusercontent.com/Team-Raise/.github/main/profile/README.md",
        icon: "i-icon-park-outline:vegetables",
        excerpt: "Next.js, Arduino, Raspberry Pi를 사용하여 제작한 스마트팜",
        link: "https://vuepress-theme-gungnir.vercel.app"
      },
      {
        id: "gbsw-book-manager",
        title: "전공 도서 관리 시스템",
        file: "markdown/portfolio/gbsw-book-manager/gbsw-book-manager.md",
        icon: "i-icon-park-outline:book-open",
        excerpt:
          "경북소프트웨어고등학교 전공 도서를 대출.반납 할 수 있는 도서 관리 프로그램",
        link: "https://github.com/gbsw-book-manager"
      }
      /*{
        id: "text-classification",
        title: "Text Classification",
        file: "https://raw.githubusercontent.com/Renovamen/Text-Classification/master/README.md",
        icon: "i-icon-park-outline:book-open",
        excerpt: "PyTorch implementation of text classificaiton models...",
        link: "https://github.com/Renovamen/Text-Classification"
      },
      {
        id: "speech-emotion-recognition",
        title: "Speech Emotion",
        file: "https://raw.githubusercontent.com/Renovamen/Speech-Emotion-Recognition/master/README.md",
        icon: "i-ant-design:audio-filled",
        excerpt: "Speech emotion recognition using Keras and sklearn...",
        link: "https://github.com/Renovamen/Speech-Emotion-Recognition"
      },
      {
        id: "pcalg-py",
        title: "PC Algorithm",
        file: "https://raw.githubusercontent.com/Renovamen/pcalg-py/master/README.md",
        icon: "i-tabler:atom-2",
        excerpt: "Implement PC algorithm in Python...",
        link: "https://github.com/Renovamen/pcalg-py"
      },
      {
        id: "midgard",
        title: "Interactable Resume",
        file: "https://raw.githubusercontent.com/Renovamen/midgard/master/README.md",
        icon: "i-bx:game",
        excerpt: "An interactable version of my resume, powered by Vue...",
        link: "https://resume.zxh.io/"
      },
      {
        id: "image-captioning",
        title: "Image Captioning",
        file: "https://raw.githubusercontent.com/Renovamen/Image-Captioning/master/README.md",
        icon: "i-bi:image-fill",
        excerpt: "PyTorch implementation of image captioning models...",
        link: "https://github.com/Renovamen/Image-Captioning"
      },
      {
        id: "wordle-helper",
        title: "Wordle Helper",
        file: "https://raw.githubusercontent.com/Renovamen/wordle-helper/main/README.md",
        icon: "i-bi:grid-1x2",
        excerpt: "Help you solve Wordle puzzles...",
        link: "https://wordle.zxh.io"
      },
      {
        id: "cube-solver",
        title: "Cube Solver",
        file: "https://raw.githubusercontent.com/Renovamen/Just-a-Cube/master/README.md",
        icon: "i-bx:cube",
        excerpt: "A rubik's cube solver (layer-by-layer & two-phase)...",
        link: "https://cube.zxh.io"
      },
      {
        id: "alkaid",
        title: "Alkaid",
        file: "https://raw.githubusercontent.com/Renovamen/alkaid/main/README.md",
        icon: "i-simple-icons:stellar",
        excerpt: "Minimal reinforcement-learning toolbox for PyTorch...",
        link: "https://github.com/Renovamen/alkaid"
      },
      {
        id: "fishmail",
        title: "Fishmail",
        file: "https://raw.githubusercontent.com/Renovamen/Fishmail/master/README.md",
        icon: "i-game-icons:fish-escape",
        excerpt: "上班的时候装作在 Gmail 上查邮件的样子看知乎摸鱼...",
        link: "https://fishmail.vercel.app"
      }*/
    ]
  }
];

export default bear;

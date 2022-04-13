TODO  
[x] real-world 다운로드 받아서 폴더 구성 어떻게 되어있는지 확인하기

# Creating a Project

1. create app

```tsx
npx create-next-app@latest
```

우리가 할 수 있는 것은 pages에서 페이지를 만드는 것 뿐 (next js 는 프레임워크다)

#

`Next.js`에서 **page**를 만드는 방법은 다음과 같다.

페이지 디렉토리의 `.js`, `.jsx`, `.ts`, `.tsx` 파일에서 export한 React Component이다.
각 페이지는 파일 이름을 기준으로 Routing 된다. (SvelteKit 과 동일)

```tsx
URL의 이름은 file명이 될 것이다.
pages/about.js => /about
```

## Dynamic Routes

_SvelteKit과 동일_

```tsx
pages/posts/[id].js => posts/1, post/2 ...
```

## Pre-rendering

By default, Next.js **pre-renders** every page.

`Next.js` 는 Client측 자바스크립트에 의해 모든 작업을 수행하는게 아니라
각 페이지에 대한 HTML을 미리 생성한다. ⇒ SEO 향상

생선된 `HTML`은 해당 페이지에 필요한 `최소 JS코드`와 연결된다.
브라우저에 의해 `page`가 load되면 `JavaScript 코드가 실행`되어 `interactive` 하게 만든다.
⇒ **Hydration**

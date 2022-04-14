TODO

- [x] real-world 다운로드 받아서 폴더 구성 어떻게 되어있는지 확인하기

# Creating a Project

1. create app

```tsx
npx create-next-app@latest
```

우리가 할 수 있는 것은 pages에서 페이지를 만드는 것 뿐 (next js 는 프레임워크다)

# Pages

`Next.js`에서 **page**를 만드는 방법은 다음과 같다.

페이지 디렉토리의 `.js`, `.jsx`, `.ts`, `.tsx` 파일에서 export한 React Component이다.
각 페이지는 파일 이름을 기준으로 Routing 된다. (SvelteKit 과 동일)

```tsx
URL의 이름은 file명이 될 것이다.
pages/about.js => /about
```

## A tag Routing

```tsx
function Navbar() {
  return (
    <nav>
      <a href="/">Home</a>
      <a href="/about">About</a>
    </nav>
  );
}

export default Navbar;
```

다음과 같이 사용 할 경우 Lint가 뭐라고 한다.

a 태그를 Home 페이지로 이동하는데 사용하지 마라! 라고 하는데
NextJS 에서 a 태그를 네비게이팅 하는데 사용하면 안되는 이유는 앱 내에서 페이지를 네이게이트할 때 사용해야만 하는 특정 컴포넌트가 있기 때문이다.

⇒ 이렇게 하면 전체 어플리케이션이 reload 된다.

```tsx
import Link from 'next/link';

function Navbar() {
  return (
    <nav>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
    </nav>
  );
}

export default Navbar;
```

Link를 사용할 것

근데 왜 Link로 감싸고 한번 더 a 태그 씁니까??

⇒ className, style 등을 Link에는 못넣어줘서

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

### Hydration?

예로 Counter를 만들어 보자.

```tsx
import React, { useState } from 'react';

function Home() {
  const [counter, setCounter] = useState(0);
  const increaseCount = () => setCounter(prev => prev + 1);
  return (
    <>
      <div>hi {counter}</div>
      <button onClick={increaseCount}>+</button>
    </>
  );
}

export default Home;
```

next.js는 초기상태로 pre-render 를 진행한다. (이때는 button을 눌러도 동작하지 않음)
처음에 이 페이지가 로딩될 때 많은 스크립트를 같이 요청하는데, react.js를 프론트엔드 안에서 실행하는 것을 hydration이라고 부른다.

왜냐면 next.js는 react.js를 백에서 동작시켜서 해당 페이지를 미리 만드는데, 그게 component들을 render시키고, 렌더링이 끝났을 때 HTML이 되고, next.js 는 그 HTML을 페이지의 소스코드에 넣어준다.
유저는 자바스크립트와 react.js가 로딩되지 않았더라도 콘텐츠를 볼 수 있고, react.js가 로딩되었을 때 기본적으로 이미 존재하는 것들과 연결되서 일반적인 react.js앱이 된다.

## Two forms of Pre-rendering

**`Static Generation`** | **`Server-side Rendering`**

> Next.js를 사용하면 각 페이지에 사용할 pre-rendering 방식을 선택할 수 있다.
> 대부분의 페이지에 대해 Static Generation을 사용하고 다른 페이지에 대해서는 SSR을 사용하여
> ”Hybird” Next.js 앱을 만들 수 있다.

### Static Generation (Recommended)

- HTML은 **build time**에 생성되며 각 요청에 재사용됨.
- 퍼포먼스상의 이유로 Static Generation을 추천.
  성능을 높이기 위한 추가 구성 없이 정적으로 생성된 페이지를 CDN에 의해 캐싱할 수 있다.
- Static Generation 을 사용하는 경우 page의 HTML은 빌드시에 생성되므로, 재사용에 용이하다.

### Server-side Rendering

- HTML이 **each request** 에 대해 생성됨.
- 페이지에서 SSR을 사용하려면 `getServerSideProps` 를 export 해줘야 한다.
- SSR은 Static Generation보다 성능이 느리기 때문에 반드시 필요한 경우에만 사용 할 것

## When shoud I use Static Generation?

<aside style="background-color: #eee; border-radius: 4px; padding: 10px 20px">
👉🏻 앵간하면 써라

**”사용자의 요청보다 먼저 이 페이지를 미리 렌더링 할 수 있는가?”** 를 생각하고
그러한 경우 Static Generation 써라!

사용자의 요청보다 먼저 페이지를 rendering 할 수 없는 경우 ㄴㄴ
페이지에 자주 업데이트되는 데이터가 표시되고 모든 요청에 따라 페이지 내용이 변경될 수 있으니깐

</aside>

- 마케팅 페이지
- Blog Posts & 포트폴리오
- E-commerce 상품 리스트 페이지
- Help & FAQ & Doc 페이지

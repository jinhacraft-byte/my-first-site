import MetroHero from './component/scroll-locked-video-hero';

export default function Home() {
  return (
    <main>
      <MetroHero
        title="나만의 웹사이트"
        tagline="환영합니다! 영상을 끝까지 재생해 보세요."
        scrollHint="아래로 스크롤"
      />
    </main>
  );
}

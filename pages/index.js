import MetroHero from "./component/scroll-locked-video-hero";

export default function Home() {
  return (
    <main style={{ backgroundColor: "#05070d", color: "#f2f4f8" }}>
      
      {/* 1층: 메인 비디오 화면 (bg.mp4 적용 완료) */}
      <MetroHero
        videoSrc="/bg.mp4"
        title="아자스!"
        tagline="대학생 일본어 교류회 3기 신규 멤버 모집 🌸"
        scrollHint="스크롤을 내려 자세히 보기"
      />

      {/* 2층: 동아리 인트로 소개 */}
      <div style={{ padding: "120px 20px", backgroundColor: "white", color: "black", textAlign: "center" }}>
        <h2 style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "20px" }}>
          "포기하면 그 순간 시합 종료예요"
        </h2>
        <p style={{ fontSize: "18px", lineHeight: "1.8", color: "#444", wordBreak: "keep-all" }}>
          문법이 어려워서, 혹은 틀릴까봐 입을 닫아버리는 순간 회화는 거기서 끝!<br />
          히라가나도 몰라도, 능숙하지 않아도 일단 뱉어도 OK 😆<br />
          책만 보고 억지로 외우는 방식 말고,<br />
          <b>[아자스]에서 같이 수다 떨며 자연스럽게 입 터지는 연습합시다!</b>
        </p>
      </div>

      {/* 3층: 아자스 클래스 소개 */}
      <div style={{ padding: "100px 20px", backgroundColor: "#f8f9fa", color: "black", textAlign: "center" }}>
        <h2 style={{ fontSize: "32px", fontWeight: "bold", marginBottom: "50px" }}>🪭 아자스! 클래스</h2>
        
        <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "600px", margin: "0 auto", textAlign: "left" }}>
          
          <div style={{ backgroundColor: "white", padding: "30px", borderRadius: "16px", boxShadow: "0 4px 10px rgba(0,0,0,0.05)" }}>
            <h3 style={{ fontSize: "22px", marginTop: "0", marginBottom: "10px" }}>🎬 01. 덕톡반</h3>
            <p style={{ margin: 0, color: "#666", lineHeight: "1.5" }}>애니 보면서 최애·명장면 이야기! 좋아하는 장면과 대사를 함께 보고 자연스럽게 일본어로 수다 떨기</p>
          </div>

          <div style={{ backgroundColor: "white", padding: "30px", borderRadius: "16px", boxShadow: "0 4px 10px rgba(0,0,0,0.05)" }}>
            <h3 style={{ fontSize: "22px", marginTop: "0", marginBottom: "10px" }}>✈️ 02. 트립톡반</h3>
            <p style={{ margin: 0, color: "#666", lineHeight: "1.5" }}>편의점 주문, 맛집 예약, 쇼핑, 길 묻기까지! 일본 여행에서 바로 써먹을 수 있는 실전 회화 연습</p>
          </div>

          <div style={{ backgroundColor: "white", padding: "30px", borderRadius: "16px", boxShadow: "0 4px 10px rgba(0,0,0,0.05)" }}>
            <h3 style={{ fontSize: "22px", marginTop: "0", marginBottom: "10px" }}>📚 03. 갓생반</h3>
            <p style={{ margin: 0, color: "#666", lineHeight: "1.5" }}>JLPT 단어·문법·독해를 함께 공부하며 혼자서는 미루기 쉬운 일본어 공부 루틴 만들기</p>
          </div>

          <div style={{ backgroundColor: "white", padding: "30px", borderRadius: "16px", boxShadow: "0 4px 10px rgba(0,0,0,0.05)" }}>
            <h3 style={{ fontSize: "22px", marginTop: "0", marginBottom: "10px" }}>🇯🇵 04. 토모반</h3>
            <p style={{ margin: 0, color: "#666", lineHeight: "1.5" }}>일본인 유학생들과 편하게 이야기하며 요즘 일본 대학생들이 실제로 쓰는 찐 말투 배우기</p>
          </div>

        </div>
      </div>

      {/* 4층: 지원하기 버튼 구역 */}
      <div style={{ padding: "120px 20px", backgroundColor: "#05070d", color: "white", textAlign: "center" }}>
        <h2 style={{ fontSize: "32px", fontWeight: "bold", marginBottom: "20px" }}>🍡 지금 바로 합류하세요!</h2>
        <p style={{ fontSize: "18px", marginBottom: "50px", color: "rgba(240,244,248,0.7)", lineHeight: "1.6" }}>
          일본어, 공부만 하지 말고 이제 한번 써먹어보자!<br />
          아자스! 3기에서 같이 놀면서 시작해요 🙂
        </p>
        
        <a 
          href="https://forms.gle/Lbp2A1GEzLD3UXDn7" 
          target="_blank" 
          rel="noreferrer"
          style={{
            display: "inline-block",
            padding: "18px 50px",
            backgroundColor: "#FF5A5F",
            color: "white",
            textDecoration: "none",
            fontSize: "20px",
            fontWeight: "bold",
            borderRadius: "50px",
            marginBottom: "30px",
            boxShadow: "0 4px 15px rgba(255, 90, 95, 0.4)"
          }}
        >
          3기 지원하기
        </a>
        
        <br />
        
        <a 
          href="https://open.kakao.com/o/sPXngnQi" 
          target="_blank" 
          rel="noreferrer"
          style={{ color: "#aaa", textDecoration: "underline", fontSize: "15px" }}
        >
          💬 궁금한 점이 있다면? 오픈카톡 문의하기
        </a>
      </div>

    </main>
  );
}

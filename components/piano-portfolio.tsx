"use client";

import { useState } from "react";

const education = [
  {
    number: "01",
    title: "Royal Danish Academy of Music",
    lines: ["Master’s Degree · Piano Performance", "丹麦皇家音乐学院 · 钢琴演奏硕士"],
  },
  {
    number: "02",
    title: "Wuhan Conservatory of Music",
    lines: ["Bachelor’s Degree · Piano Performance", "武汉音乐学院 · 钢琴演奏专业本科"],
  },
  {
    number: "03",
    title: "Current PhD Research · Music Education",
    lines: [
      "Currently conducting PhD research in Music Education in Copenhagen.",
      "目前在哥本哈根从事音乐教育方向的 PhD 研究。",
    ],
  },
];

const highlights = [
  {
    year: "2024",
    content: (
      <>
        <strong>Doctoral Admission · Scholarship</strong>
        <br />
        In 2024, I was admitted to the Doctor in Piano Performance programme at the Royal Irish Academy of Music with a scholarship.
        <br />
        2024年获爱尔兰皇家音乐学院钢琴演奏博士项目奖学金录取。
      </>
    ),
  },
  {
    year: "2024",
    content: (
      <>
        <strong>First Prize</strong> — Romania Live Music Art Spring International Piano Competition
        <br />一等奖
      </>
    ),
  },
  {
    year: "2023",
    content: (
      <>
        <strong>Second Prize</strong> — Lake Geneva International Piano Competition
        <br />二等奖
      </>
    ),
  },
  {
    year: "2023",
    content: (
      <>
        <strong>Second Prize</strong> — Servaas International Music Competition
        <br />二等奖
      </>
    ),
  },
  {
    year: "2023",
    content: (
      <>
        Royal Danish Academy of Music International Student Scholarship &amp; Summer Masterclass Scholarship.
        <br />丹麦皇家音乐学院国际学生奖学金及暑期大师班奖学金。
      </>
    ),
  },
  {
    year: "IHMS",
    content: (
      <>
        <strong>Holland Music Sessions · Netherlands</strong>
        <br />
        Received positive feedback from Christopher Elton, Head of Piano at the Royal College of Music, on my performance of Chopin’s <em>Barcarolle, Op. 60</em>.
        <br />
        参与荷兰 IHMS Music Session，并获得英国皇家音乐学院钢琴系主任 Christopher Elton 对肖邦《船歌》Op. 60 演奏的好评。
      </>
    ),
  },
  {
    year: "LISZT",
    content: (
      <>
        <strong>Lecture-Performance</strong>
        <br />
        Performed alongside a piano professor in a Liszt lecture-performance.
        <br />与钢琴教授同台演出李斯特专题音乐会及学术讲座。
      </>
    ),
  },
];

const videos = [
  {
    href: "https://www.youtube.com/watch?v=TeGQOlXMGNY",
    thumbnail: "https://img.youtube.com/vi/TeGQOlXMGNY/hqdefault.jpg",
    title: "Chopin · Barcarolle, Op. 60",
    subtitle: "肖邦《船歌》Op. 60",
  },
  {
    href: "https://www.youtube.com/watch?v=0voCidZbcOA",
    thumbnail: "https://img.youtube.com/vi/0voCidZbcOA/hqdefault.jpg",
    title: "Beethoven · Piano Sonata Op. 22, No. 11",
    subtitle: "贝多芬钢琴奏鸣曲 Op. 22, No. 11",
  },
];

function SectionTitle({ title, chinese }: { title: string; chinese: string }) {
  return (
    <div className="section-title">
      <h2>{title}</h2>
      <span className="zh">{chinese}</span>
    </div>
  );
}

export function PianoPortfolio() {
  const [isChineseHero, setIsChineseHero] = useState(false);
  const heroText = isChineseHero
    ? "专业钢琴演奏者，现居哥本哈根，专注于钢琴演奏、音乐教育与音乐连接。"
    : "Professional pianist and music educator based in Copenhagen, with a focus on musical expression, thoughtful teaching and a lasting connection with music.";

  return (
    <>
      <nav className="nav" aria-label="Primary navigation">
        <div className="nav-inner">
          <a className="brand" href="#home">
            <span className="brand-mark" aria-hidden="true">ZP</span>
            ZIAN PIANO
          </a>
          <div className="navlinks">
            <a href="#education">Education</a>
            <a href="#highlights">Highlights</a>
            <a href="#videos">Videos</a>
            <a href="#teaching">Teaching</a>
            <a href="#why-piano">Why Piano</a>
            <a href="#pricing">Lessons</a>
            <a href="#contact">Contact</a>
          </div>
          <button
            className="lang"
            type="button"
            aria-pressed={isChineseHero}
            onClick={() => setIsChineseHero((value) => !value)}
          >
            中文 / EN
          </button>
        </div>
      </nav>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <div className="eyebrow">Piano Performance · Music Education</div>
            <h1>Zian Piano</h1>
            <div className="subtitle">钢琴演奏 · 音乐教育</div>
            <p id="heroText" aria-live="polite">
              {heroText}
            </p>
            <div className="hero-actions">
              <a className="button-primary" href="#videos">View performances</a>
              <a className="button-secondary" href="#contact">Book a lesson</a>
            </div>
          </div>
          <a
            className="hero-visual"
            href={videos[0].href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Watch Chopin Barcarolle performance on YouTube"
            style={{ backgroundImage: `url(${videos[0].thumbnail})` }}
          >
            <span className="hero-visual-kicker">Featured performance</span>
            <strong>Chopin · Barcarolle</strong>
            <small>Op. 60 · Copenhagen</small>
            <span className="hero-watch">Watch <b>↗</b></span>
          </a>
        </section>

        <section className="section clean-section" id="education">
          <SectionTitle title="Education" chinese="教育背景" />
          <div className="simple-list">
            {education.map((item) => (
              <div key={item.number}>
                <span>{item.number}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>
                    {item.lines[0]}
                    <br />
                    {item.lines[1]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section clean-section" id="highlights">
          <SectionTitle title="Highlights" chinese="专业高光与获奖" />
          <div className="simple-list">
            {highlights.map((item, index) => (
              <div key={`${item.year}-${index}`}>
                <span>{item.year}</span>
                <p>{item.content}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section clean-section" id="videos">
          <SectionTitle title="Videos" chinese="演奏视频" />
          <div className="video-grid">
            {videos.map((video) => (
              <article key={video.href}>
                <a href={video.href} target="_blank" rel="noopener noreferrer">
                  <div
                    className="video-placeholder"
                    aria-hidden="true"
                    style={{ backgroundImage: `url(${video.thumbnail})` }}
                  >
                    <span className="video-source">YouTube</span>
                    <span className="video-play">▶</span>
                  </div>
                  <h3>{video.title}</h3>
                  <p>{video.subtitle}</p>
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="section statement-section" id="teaching">
          <SectionTitle title="Teaching" chinese="钢琴教学" />
          <div className="card">
            <h3>My Approach · 我的教学方式</h3>
            <div className="card-copy">
              <p>
                I teach children and adults with a focus on solid foundations, rhythm, musical expression, confidence and enjoyment. I adapt lessons to each student and aim to help them develop their own musical expression.
              </p>
              <p>
                我教授儿童及成人，注重基础、节奏、音乐表达、自信与兴趣，并根据学生特点调整教学方式，帮助他们找到自己的音乐表达方式。
              </p>
            </div>
          </div>
        </section>

        <section className="section clean-section tone-section" id="why-piano">
          <SectionTitle title="Why Learn Piano?" chinese="为什么要学钢琴？" />
          <div className="why-copy">
            <div className="zh-copy">
              <p>学习钢琴可以锻炼孩子的专注力、协调能力和想象力，也能培养审美，让孩子拥有一个思考、倾听和表达自己的空间。</p>
              <p>很多小时候学过钢琴的人，长大后仍会回到音乐中。留下来的不一定是考级或比赛，而可能是一段美好的记忆，以及与音乐长期的情感连接。</p>
              <p>在 AI 不断发展的时代，情绪、人与人之间的连接，以及教育依然需要人的参与。钢琴可以成为很好的情绪载体，让人通过声音感受、表达与交流。</p>
            </div>
            <div className="why-divider" />
            <div className="en-copy">
              <p>Learning piano develops attention, coordination, imagination and aesthetic awareness. It gives children a space to think, listen and express themselves.</p>
              <p>Many people who learned piano as children return to music later in life. What remains is often not a certificate or a competition result, but a beautiful memory and a lasting emotional connection with music.</p>
              <p>In a time shaped by AI and technology, human emotion, connection and education remain deeply human. Piano can be a powerful carrier for emotion — a place to listen, feel and communicate.</p>
            </div>
          </div>
        </section>

        <section className="section statement-section about-section" id="about">
          <SectionTitle title="About" chinese="关于我" />
          <div className="card">
            <p>I am a professional pianist and music educator based in Copenhagen. I have been living and studying in Denmark for four years, with extensive experience in piano performance and teaching.</p>
            <p>我在丹麦生活和学习四年，专注于钢琴演奏与音乐教育。</p>
          </div>
        </section>

        <section className="section clean-section" id="pricing">
          <SectionTitle title="Lessons" chinese="钢琴课程" />
          <div className="price-list">
            <div className="price-row">
              <div>
                <span>01</span>
                <h3>30 min</h3>
                <p>30分钟钢琴课</p>
              </div>
              <div className="price"><strong>250 DKK</strong></div>
            </div>
            <div className="price-row">
              <div>
                <span>02</span>
                <h3>45 min</h3>
                <p>45分钟钢琴课</p>
              </div>
              <div className="price"><strong>300 DKK</strong></div>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-inner">
            <SectionTitle title="Contact" chinese="联系方式" />
            <div className="contact-clean">
              <a href="mailto:shaozianan@163.com"><small>Email</small>shaozianan@163.com</a>
              <a href="tel:+4552764523"><small>Phone</small>+45 52764523</a>
              <span><small>WeChat</small>shaozianan</span>
              <span><small>Facebook</small>Zian Piano</span>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-inner">
          <span>© 2026 Zian Piano · Copenhagen</span>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}

# Ailter Design System

Ailter("AI Filter") 모바일 앱을 위한 디자인 시스템입니다.
Figma 파일 "Ailter 개발용"에서 1:1로 추출한 토큰과 컴포넌트로 구성되어 있습니다.

## 📁 파일 구조

```
.
├── Ailter Design System.html   # 문서화된 스타일 가이드 (브라우저로 열기)
└── styles/
    ├── ailter-tokens.css       # 디자인 토큰 (색상·타입·간격·radius·shadow)
    └── ailter-components.css    # 재사용 컴포넌트 (.alt-* 클래스)
```

## 🚀 시작하기

HTML에서 두 CSS 파일과 Pretendard 폰트를 불러오면 됩니다.

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css" />
<link rel="stylesheet" href="styles/ailter-tokens.css" />
<link rel="stylesheet" href="styles/ailter-components.css" />
```

> 스타일 가이드 페이지(`Ailter Design System.html`)에서 모든 컴포넌트의
> 라이브 데모와 복사용 코드 스니펫을 확인할 수 있습니다.

## 🎨 디자인 토큰 (CSS 변수)

모든 값은 `:root`의 커스텀 프로퍼티로 정의되어 있어, React / Vue / 네이티브 변환 시
그대로 매핑하면 됩니다.

### 색상
| 역할 | 변수 | 값 |
|---|---|---|
| 브랜드 | `--primary-500` | `#FF3C38` |
| 위험 (danger) | `--danger` / `--danger-bg` | `#FF3C38` / `#FFEAE9` |
| 주의 (caution) | `--caution` / `--caution-bg` | `#FF9900` / `#FFF4E5` |
| 안전 (safe) | `--safe` / `--safe-bg` | `#009EFF` / `#E6F5FF` |
| 텍스트(강) | `--text-strong` | `#1E1E1E` |
| 텍스트(보조) | `--text-muted` | `#6F717C` |
| 보더 | `--border` | `#E9EBEF` |

Primary `50–900`, Gray `50–500 + black` 전체 램프는 `ailter-tokens.css` 참고.

### 타이포그래피 (Pretendard Variable · 자간 −2%)
| 스타일 | 클래스 | 크기 / 굵기 |
|---|---|---|
| H1 | `.alt-h1` | 40 / SemiBold |
| H2 | `.alt-h2` | 24 / Bold |
| H3 | `.alt-h3` | 20 / SemiBold |
| Sub 1 | `.alt-sub1` | 18 / SemiBold |
| Sub 2 | `.alt-sub2` | 16 / SemiBold |
| Body 1 | `.alt-body1` | 16 / Regular |
| Body 2 | `.alt-body2` | 14 / Regular |
| button_lg | `.alt-btn-lg` | 16 / Medium |
| button_sm | `.alt-btn-sm` | 14 / Medium |
| Caption | `.alt-caption` | 12 / Regular |

### 간격 · Radius
- 간격: `--space-1`(4) ~ `--space-12`(48) · 4px 그리드
- Radius: `--radius-xs`(4) · `sm`(8) · `md`(12) · `lg`(16) · `xl`(20) · `full`(999)

## 🧩 컴포넌트 클래스

| 컴포넌트 | 주요 클래스 |
|---|---|
| 버튼 | `.alt-btn` + `--primary` `--secondary` `--tonal` `--neutral` / `--lg` `--md` `--sm` |
| 선택 행 | `.alt-option` (`.is-selected`) |
| 입력 / 드롭다운 | `.alt-field` (`.alt-field--dropdown`) · `.alt-search` |
| 체크박스 / 라디오 / 토글 | `.alt-checkbox` · `.alt-radio` · `.alt-toggle` |
| 태그 / 상태 배지 | `.alt-tag` + `--danger` `--caution` `--safe` `--neutral` · `.alt-legend` |
| 필터 칩 | `.alt-chip` (`.is-active`) |
| 소셜 로그인 | `.alt-social` + `--kakao` `--google` `--apple` |
| 프로그레스 | `.alt-progress` > `.alt-progress__fill` |
| 카드 / 리스트 | `.alt-card` · `.alt-list-item` · `.alt-section-head` |
| 하단 네비 / 상태바 | `.alt-tabbar` · `.alt-statusbar` · `.alt-home-indicator` |
| 신뢰도 게이지 | `.alt-gauge` (SVG, 가이드 스크립트 참고) |

### 예시

```html
<!-- 기본 버튼 -->
<button class="alt-btn alt-btn--lg alt-btn--primary">시작하기</button>

<!-- 상태 배지 -->
<span class="alt-tag alt-tag--caution"><span class="alt-tag__dot"></span>주의</span>

<!-- 토글 -->
<label class="alt-toggle">
  <input type="checkbox" checked />
  <span class="alt-toggle__track"><span class="alt-toggle__thumb"></span></span>
</label>
```

## 🔤 폰트

- **본문 UI**: Pretendard Variable (위 CDN 또는 `npm i pretendard`)
- **로고 워드마크**: Wanted Sans ExtraBlack (`.alt-wordmark`) — 미설치 시 Pretendard로 대체됨

## 📝 비고

- Figma 원본에는 별도의 범용 베이스 키트(Noto Sans · 라디우스 4)도 포함되어 있으나,
  실제 Ailter 화면이 사용하는 **브랜드 레이어**를 기준으로 구성했습니다.
- 토마토 마스코트는 Figma에서 그라디언트 벡터로 제작되어 단순 브랜드 마크로 대체했습니다.
  실제 에셋(PNG/SVG)이 있으면 교체해 사용하세요.

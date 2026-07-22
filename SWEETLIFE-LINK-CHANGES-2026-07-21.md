# Sweetlife 링크 및 외부 출처 변경 기록

- 기록일: 2026-07-21
- 프로젝트: Timeless Photography (`timeless-photography.com.au`)
- 상태: 코드, 생성 HTML 및 이 문서는 커밋·푸시하지 않은 로컬 변경 상태

## Sweetlife 링크

| 위치 | 앵커 텍스트 | 목적지 |
| --- | --- | --- |
| 홈페이지 | `newborn photography brisbane` | `https://sweetlifephotography.com.au/` |
| `/newborn-maternity` | `newborn photoshoot brisbane` | `https://sweetlifephotography.com.au/` |
| `/hand-and-feet-sculptures` | `baby hand and feet sculptures in North Lakes` | `https://sweetlifephotography.com.au/baby-hand-feet-sculptures-north-lakes/` |
| `/kids-cake-smash-photography` | `cake smash and first birthday photography in Brisbane` | `https://sweetlifephotography.com.au/cake-smash-first-birthday-photography-brisbane/` |

이번에 추가한 Sweetlife 링크는 총 4개다. 기존 2개는 Sweetlife 메인으로, 새 서비스 링크 2개는 내용이 일치하는 상세페이지로 연결한다.

## 공신력 있는 외부 출처

관련 서비스 페이지 4곳의 관련 문단 바로 뒤에 설명형 인용 링크 10개를 추가했다.

- 신생아 페이지 4개: Pregnancy Birth and Baby, Red Nose, ACCC Product Safety, eSafety
- 베이비 페이지 3개: Pregnancy Birth and Baby 2개, Cancer Council Australia
- 가족 페이지 2개: eSafety, Copyright Agency
- 사진 서비스 페이지 1개: Australian Photographic Society

Pregnancy, Birth and Baby 링크 3개는 중간 리다이렉트를 거치지 않는 최종 canonical 주소를 사용한다.

## 기타 수정

- 기존 테마 데모 사이트로 연결되던 가격 페이지의 `Contact Now` 링크를 실제 `/contact`로 변경
- `build_site.js`를 소스 오브 트루스로 유지하고 정적 HTML을 재생성
- 반응형 링크·출처 섹션 스타일을 `style.css`에 추가

## 주요 변경 파일

- `build_site.js`
- `style.css`
- `index.html`
- `newborn-maternity.html`
- `baby-photography.html`
- `family-photography.html`
- `photography-brisbane.html`
- `pricing.html`

## 검증

- `node --check build_site.js` 통과
- `node build_site.js`로 18개 페이지와 4개 글 재생성
- Sweetlife 예전 하위 목적지와 테마 데모 문의 링크가 남지 않은 것 확인
- 데스크톱·모바일에서 링크 영역 표시 및 가로 넘침 없음 확인

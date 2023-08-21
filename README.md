# Mogumogu(모그모구)<6조>

## 모앙 : 커플 공동 지출 관리 웹/앱

### 📌 실행 방법
```bash
# for Development
npm install && npm run dev

# For Presentation
npm install && npm run build && npm start
```

### 📌 개발 기간
`2023-08-03 ~ 2023-08-21`

### 📌 모듈 의존성
```json
"next": "^13.4.12",
"next-pwa": "^5.6.0",
"next-compose-plugins": "^2.2.1",
"react": "18.2.0",
"react-calendar": "^4.6.0",
"react-chartjs-2": "^5.2.0",
"react-datepicker": "^4.16.0",
"react-dom": "18.2.0",
"recharts": "^2.7.3",
"@emotion/react": "^11.11.1",
"@emotion/styled": "^11.11.0",
"@mui/icons-material": "^5.14.3",
"@mui/material": "^5.14.3",
"@mui/x-date-pickers": "^6.11.0",
"@nivo/bar": "^0.83.0",
"@nivo/core": "^0.83.0",
"@nivo/pie": "^0.83.0",
"axios": "^1.4.0",
"chart.js": "^4.3.3",
"dayjs": "^1.11.9",
"eslint": "8.46.0",
"eslint-config-next": "13.4.12"
```

### 📌 UI/UX 데모

#### 로그인 화면
<p>Fintech6/src/app/login/page.js</p>
<img src="https://github.com/KGU-System-Security/KGU-System-Security/assets/118066106/a068b123-8739-436a-a6ba-c2036612eb5d"  width="150" height="300"/>

#### 회원가입 화면
<p>Fintech6/src/app/join/page.js</p>
<img src="https://github.com/KGU-System-Security/KGU-System-Security/assets/118066106/62421899-91c3-4720-8a8e-67226ea4db9e"  width="150" height="300"/>
<img src="https://github.com/KGU-System-Security/KGU-System-Security/assets/118066106/359991ed-e259-4106-ad73-9a0f96b53d17"  width="150" height="300"/>
<img src="https://github.com/KGU-System-Security/KGU-System-Security/assets/118066106/8d1c1b4d-c8ac-4304-b137-e8a5028d41cc"  width="150" height="300"/>

#### 홈 화면
<p>Fintech6/src/app/home/page.js</p>
<img src="https://github.com/KGU-System-Security/KGU-System-Security/assets/118066106/aefb3fea-e743-4298-af6b-d655ca89900a"  width="150" height="300"/>
<img src="https://github.com/KGU-System-Security/KGU-System-Security/assets/118066106/8bfebec7-a390-41d2-a418-32573fb3626a"  width="150" height="300"/>

#### 캘린더 화면
<p>Fintech6/src/app/calendar/page.js</p>
<img src="https://github.com/KGU-System-Security/KGU-System-Security/assets/118066106/42463257-3fe5-4acb-beab-4e17d5f99398"  width="150" height="300"/>
<img src="https://github.com/KGU-System-Security/KGU-System-Security/assets/118066106/497dcc44-86b3-4794-8c91-6882097f1fbd"  width="150" height="300"/>
<img src="https://github.com/KGU-System-Security/KGU-System-Security/assets/118066106/aafd2ece-df86-45ff-ad0b-f016635362f1"  width="150" height="300"/>
<img src="https://github.com/KGU-System-Security/KGU-System-Security/assets/118066106/b0a76379-a565-47d9-99e5-708f858dd4e1"  width="150" height="300"/>
<img src="https://github.com/KGU-System-Security/KGU-System-Security/assets/118066106/55e8b086-7e62-423d-8c03-0237d0a327cd"  width="150" height="300"/>
<img src="https://github.com/KGU-System-Security/KGU-System-Security/assets/118066106/45e3dda5-cf41-45b0-b433-ec6de887a715"  width="150" height="300"/>

#### 가계부 화면
<p>Fintech6/src/app/account/page.js</p>
<img src="https://github.com/KGU-System-Security/KGU-System-Security/assets/118066106/b9a49b60-afc4-4f4f-aabc-2c0b9f1ce004"  width="150" height="300"/>
<img src="https://github.com/KGU-System-Security/KGU-System-Security/assets/118066106/2f5b794a-97a5-46b4-94f8-94dd7d670a66"  width="150" height="300"/>
<img src="https://github.com/KGU-System-Security/KGU-System-Security/assets/118066106/12475809-55b3-4108-9d8c-a36db731b372"  width="150" height="300"/>

#### 관리1 화면
<p>Fintech6/src/app/manage/page.js</p>
<img src="https://github.com/KGU-System-Security/KGU-System-Security/assets/118066106/7e72c4ec-d039-48c9-9529-14738e15b335"  width="150" height="300"/>
<p>
<p>Fintech6/src/app/manage/spend/page.js</p>
<img src="https://github.com/KGU-System-Security/KGU-System-Security/assets/118066106/4b4c26b9-a3d9-4df0-9449-6cb972403e63"  width="150" height="300"/>

#### 관리2 화면
<p>Fintech6/src/app/manage/manage2/page.js</p>
<img src="https://github.com/KGU-System-Security/KGU-System-Security/assets/118066106/7b746ce7-dcf2-435e-b91e-075809671ec2"  width="150" height="300"/>
<p>
<p>Fintech6/src/app/manage/manage2/add/page.js</p>
<img src="https://github.com/KGU-System-Security/KGU-System-Security/assets/118066106/36abd94a-ca8e-4947-8fa6-8d9e13caefa9"  width="150" height="300"/>

#### 설정 화면
<p>Fintech6/src/app/settings/page.js</p>
<img src="https://github.com/KGU-System-Security/KGU-System-Security/assets/118066106/e11d597b-d886-4bcd-af0f-6836033a2939"  width="150" height="300"/>
<img src="https://github.com/KGU-System-Security/KGU-System-Security/assets/118066106/043eb52a-0872-47dd-9ace-bb4431b7a2d2"  width="150" height="300"/>
<img src="https://github.com/KGU-System-Security/KGU-System-Security/assets/118066106/57df5518-5b99-4829-b376-5ee248d4f776"  width="150" height="300"/>
<img src="https://github.com/KGU-System-Security/KGU-System-Security/assets/118066106/a508e8ca-79c1-42ac-91f1-bc72c92f0e22"  width="150" height="300"/>

### 📌 피그마 주소
https://www.figma.com/file/5FbUZXmn7HRUutw433l8VP/%ED%95%80%EC%9D%B8%EC%BD%94-6%EC%A1%B0_UI?type=design&node-id=145-242&mode=design&t=xqxrrvJMCbRVhiy5-0

### 📌 Notion 주소
https://funny-wave-ef6.notion.site/032fd831357f4d3d96b690a2d105955d?v=d012b23d76c84db1a812c8feabc13d44

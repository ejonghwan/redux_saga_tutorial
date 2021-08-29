const express = require('express')
const app = express();

const cors = require('cors')
const cookieParser = require('cookie-parser')
app.use(cors({
    origin: 'http://localhost:3000', //true로 하면 *대신 보낸곳의 주소가 자동으로 들어가 편리. //지금은 다 허용이지만 나중엔 내 도메인만
    credentials: true, // 쿠키도 허용해줌
}))

// .use는 express에 뭔가 장착해서 넣어준다는건데 클라이언트에서 post put patch로 보내준 데이터를 해석해서 body에 넣어줌. use안에는 middleware넣어줌. 순서중요
app.use(express.json()) // front안에 json으로 보냈을 때 req.body안에 json으로 넣어줌. axios같은거 쓸때 
app.use(express.urlencoded({ extended: true })); // form submit했을떄 urlincoded방식으로 넘겨주는데 이걸 해석해서 req.body에 넣어줌




app.get('/', (req, res) => {
    res.send('aa')
})

app.post('/test', (req, res) => {
    console.log(req.body)
    res.send(req.body)
})

app.listen(3060, () => {
    console.log('server on')
})
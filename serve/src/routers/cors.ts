const  whitelist = ['http://localhost:8888',"http://127.0.0.1:5500", undefined]
const  corsOptions = {
  origin(origin, callback) {
    console.log(origin,"----orgin");
    if (whitelist.includes(origin)) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}
export {corsOptions}
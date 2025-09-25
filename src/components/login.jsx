"use client"
import { useState } from "react"

export default function AuthForm() {
  const [mode, setMode] = useState("login")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [message, setMessage] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()

    const users = JSON.parse(localStorage.getItem("users") || "[]")

    if (mode === "register") {
      if (!email || !password || !confirmPassword) {
        setMessage({ type: "danger", text: "Бүх талбарыг бөглөнө үү." })
        return
      }
      if (password !== confirmPassword) {
        setMessage({ type: "danger", text: "Нууц үг таарахгүй байна!" })
        return
      }

      if (users.find((u) => u.email === email)) {
        setMessage({
          type: "danger",
          text: "Энэ имэйл аль хэдийн бүртгэлтэй байна!",
        })
        return
      }

      const newUser = { email, password }
      users.push(newUser)
      localStorage.setItem("users", JSON.stringify(users))

      setMessage({
        type: "success",
        text: "Амжилттай бүртгүүллээ! Нэвтэрнэ үү.",
      })
      setMode("login")
      setEmail("")
      setPassword("")
      setConfirmPassword("")
      return
    }

    if (mode === "login") {
      const foundUser = users.find(
        (u) => u.email === email && u.password === password
      )

      if (foundUser) {
        localStorage.setItem("loggedInUser", JSON.stringify(foundUser))
        setMessage({ type: "success", text: "Амжилттай нэвтэрлээ!" })
        setEmail("")
        setPassword("")
      } else {
        setMessage({ type: "danger", text: "Имэйл эсвэл нууц үг буруу байна!" })
      }
    }
  }

  return (
    <div className='card shadow p-4'>
      <h2 className='mb-4 text-center'>
        {mode === "login" ? "Нэвтрэх" : "Бүртгүүлэх"}
      </h2>

      {message && (
        <div className={`alert alert-${message.type}`} role='alert'>
          {message.text}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label className='form-label'>Имэйл</label>
          <input
            type='email'
            className='form-control'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className='mb-3'>
          <label className='form-label'>Нууц үг</label>
          <input
            type='password'
            className='form-control'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {mode === "register" && (
          <div className='mb-3'>
            <label className='form-label'>Нууц үг давтах</label>
            <input
              type='password'
              className='form-control'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
        )}

        <button
          type='submit'
          className={`btn w-100 ${
            mode === "login" ? "btn-info" : "btn-success"
          }`}
        >
          {mode === "login" ? "Нэвтрэх" : "Бүртгүүлэх"}
        </button>
      </form>

      <div className='text-center mt-3'>
        {mode === "login" ? (
          <p>
            Бүртгэлгүй юу?{" "}
            <button
              className='btn btn-link p-0'
              onClick={() => setMode("register")}
            >
              Бүртгүүлэх
            </button>
          </p>
        ) : (
          <p>
            Аль хэдийн бүртгэлтэй юу?{" "}
            <button
              className='btn btn-link p-0'
              onClick={() => setMode("login")}
            >
              Нэвтрэх
            </button>
          </p>
        )}
      </div>
    </div>
  )
}

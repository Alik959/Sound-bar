// src/app/login/page.jsx
import LogIn from "../../components/login"

export default function LoginPage() {
  return (
    <div
      className='container d-flex justify-content-center align-items-center'
      style={{ minHeight: "80vh" }}
    >
      <div className='w-100' style={{ maxWidth: "420px" }}>
        <LogIn />
      </div>
    </div>
  )
}

import { useState } from 'react'
import './PasswordGate.css'

const ACCESS_PASSWORD = 'MTS'
const ACCESS_STORAGE_KEY = 'mts-ads-access-granted'

function getInitialAccess() {
  return window.sessionStorage.getItem(ACCESS_STORAGE_KEY) === 'true'
}

export function PasswordGate({ children }) {
  const [isUnlocked, setIsUnlocked] = useState(getInitialAccess)
  const [password, setPassword] = useState('')
  const [hasError, setHasError] = useState(false)

  function handlePasswordChange(event) {
    setPassword(event.target.value.toUpperCase().replace(/[^A-Z]/g, ''))
    setHasError(false)
  }

  function handleSubmit(event) {
    event.preventDefault()

    if (password !== ACCESS_PASSWORD) {
      setHasError(true)
      return
    }

    window.sessionStorage.setItem(ACCESS_STORAGE_KEY, 'true')
    setIsUnlocked(true)
  }

  if (isUnlocked) {
    return children
  }

  return (
    <main className="password-gate">
      <form className="password-gate__form" onSubmit={handleSubmit}>
        <p className="password-gate__eyebrow">MTS ADS</p>
        <h1 className="password-gate__title">Закрытая презентация</h1>
        <p className="password-gate__description">
          Введите пароль, чтобы посмотреть материалы.
        </p>

        <label className="password-gate__label" htmlFor="access-password">
          Пароль
        </label>
        <input
          autoCapitalize="characters"
          autoComplete="off"
          className="password-gate__input"
          id="access-password"
          onChange={handlePasswordChange}
          pattern="[A-Z]+"
          required
          type="password"
          value={password}
          aria-describedby={hasError ? 'access-password-error' : undefined}
          aria-invalid={hasError}
        />
        {hasError && (
          <p className="password-gate__error" id="access-password-error" role="alert">
            Проверьте пароль и попробуйте ещё раз.
          </p>
        )}

        <button className="password-gate__submit" type="submit">
          ОТКРЫТЬ
        </button>
      </form>
    </main>
  )
}

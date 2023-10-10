import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <a href="https://coreui.io" target="_blank" rel="noopener noreferrer">
          Zeiner
        </a>
        <span className="ms-1">&copy; 2023 SEI</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Criado por</span>
        <a
          href="https://www.facebook.com/profile.php?id=100009328483242"
          target="_blank"
          rel="noopener noreferrer"
        >
          Antonio Machado | Zeiner
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)

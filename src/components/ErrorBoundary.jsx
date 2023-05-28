import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Тут ви можете зробити щось з помилкою, наприклад, зареєструвати її в службу моніторингу помилок
    console.error(error);
  }

  render() {
    if (this.state.hasError) {
      // Відображення запасного контенту або повідомлення про помилку
      return <div>Виникла помилка. Будь ласка, спробуйте ще раз.</div>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

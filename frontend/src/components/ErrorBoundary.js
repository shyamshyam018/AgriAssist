import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Suppress error on UI, log silently
    console.warn('Suppressed React Error:', error);
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.warn('Error details:', errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return null; // Render nothing instead of error
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

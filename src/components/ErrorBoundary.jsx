import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error) {
    console.error("Erreur de rendu La Dioza:", error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-dioza-cream p-10 text-dioza-deep">
          <h1 className="font-display text-5xl font-black">Pizzeria La Dioza</h1>
          <p className="mt-4 text-lg">Le site est chargé, mais une section a rencontré une erreur de rendu.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

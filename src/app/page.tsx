import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aailymotion - Coming Soon',
  description: 'Welcome to Aailymotion. The future is coming soon.',
};

export default function Home() {
  return (
    <div className="container">
      <div className="content">
        <h1 className="title">Welcome to Aailymotion</h1>
        <p className="subtitle">Coming Soon</p>
      </div>
    </div>
  );
}

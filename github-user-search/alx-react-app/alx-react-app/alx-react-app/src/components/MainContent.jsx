import UserProfile from './UserProfile';

function MainContent() {
  return (
    <main style={{ padding: '20px', backgroundColor: '#fafafa' }}>
      <UserProfile name="Davis Kibet" age={19} bio="Aspiring Civil Engineer and Web Developer." />
      <UserProfile name="Jane Doe" age={21} bio="Loves nature, travel, and React." />
      <UserProfile name="John Smith" age={25} bio="Tech enthusiast and open source contributor." />
    </main>
  );
}

export default MainContent;

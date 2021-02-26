import React from 'react';
import Header from './components/Header/CustomHeader';
import Footer from './components/Footer/CustomFooter';
import CongressMembersList from './components/Lists/CongressMembers';

function App() {
  return (
    <div>
      <Header />
      <main>
        <h1>App</h1>
        <CongressMembersList />
      </main>
      <Footer />
    </div>
  );
}

export default App;

import './main.scss';
import Navigation from './components/navigation/Navigation';
import Banner from './components/banner/Banner';
import Services from './components/services/Services';
import RecentWork from './components/works/RecentWorks';
1

function App() {
  // TODO Create components 
  // 1. Navigation
  // 1.1. Navigation full screen
  // 2. Services per box component
  // 3. Slider component 
  // 4. Slider item component recent work
  // 5. slider item component skills
  // 6. Approach box component

  return (
    <div className="App">
      <Navigation />
      <Banner />
      <Services />
      <RecentWork />
    </div>
  )
}

export default App

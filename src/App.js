import {useState} from 'react';
import './App.css';




var home = <LandingPage />
var about = <AboutPage />
let pages = [home, about]
let page = [<LandingPage />,<AboutPage />]
// let pagenumber = 0

// console.log(page)

function AboutPage() {
  return (
    <div className='landingPageContainer'>
      <div className='socialMediaIcons'>
      <img src='./adamProfile.png' className='profilePic'></img>
      
      <h1>About</h1>
      <p>[32] Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur adipisci[ng] velit, sed quia non numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum[d] exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? [D]Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? [33] At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet, ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
        
   
      </div>
    </div>
  )
}






function LandingPage() {
  
  return (
    <div className='landingPageContainer'>
      <img src='./adamProfile.png' className='profilePic'></img>
      <h1>Adam Ishay</h1>
      <h2>Protector of Plato</h2>
      <div className='socialMediaIcons'>
        <img src='./linkedInIcon.png'></img>
        <img src='./twitterLogo.png'></img>
        <img src='./instagramLogo.png'></img>
        <img src='./emailLogo.png'></img>
   
      </div>
    </div>
  )
}



function NavBar() {
  

  // const [currentPage, setPage] = useState(home)
  // console.log(currentPage)
  return (
    <div className='headerContainer'>
    <h1>Adam Ishay</h1>
      <nav className='NavContainer'>
        <ul className='NavItemsContainer'>
          <li 
                  // onClick={(event)=> (setPage(home) ? setPage(about) : setPage(home)) }
                  
          onClick={(e)=>{
                  
                  // let pagenumber = 1
                  // pages[page].type :
                  // pages[1]
                  // console.log(currentPage)  
                  // console.log(pages)
                  // {console.log(pagenumber)}
                  
                  }}
          >About</li>
          <li>Blog</li>
          <li>Projects</li>
          <li>CV</li>
        </ul>
      </nav>
    </div>
  )
}


function App() {

  // console.log(currentPage)    
  return (
  
    <div>
      <NavBar />
      {page[0]}
      {/* {console.log(pagenumber)} */}
    </div>
  );
}

export default App;

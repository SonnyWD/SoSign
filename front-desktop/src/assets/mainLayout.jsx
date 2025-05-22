import Nav from "../components/nav";

function MainLayout({ children }) {

  return (
     <div className="pt-16">
      {<Nav/>}
      
      <main>
        {children}
      </main>
    </div>
  );
}

export default MainLayout;

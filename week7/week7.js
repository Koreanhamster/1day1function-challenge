function App() {
  let [shoes] = useState(data);
  let navigate = useNavigate();
  // console.log(shoes[0].title);
  return (
    <div>
      <Navbar bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand href='#home'>Navbar</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link onClick={() => {navigate('/');}}>홈</Nav.Link>
            <Nav.Link onClick={() => {navigate('/detail/:id');}}>상세 페이지</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={<Home shoes={shoes}/>}></Route>
        <Route path='/detail/:id' element={<Detail shoes={shoes}/>}></Route>
      </Routes>
    </div>
  );
} 
import '../style/Home.scss'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


const Home = () => {
    return (
        <section id="home">
            <Tabs>
    <TabList>
      <Tab>Title 1</Tab>
      <Tab>Title 2</Tab>
    </TabList>

    <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
        </section>
    )
};

export default Home;
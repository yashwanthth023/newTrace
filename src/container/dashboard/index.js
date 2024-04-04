import React, { useEffect, useState } from 'react';
import FeatherIcon from 'feather-icons-react';
import Grid from './Grid';
import CreateProject from '../ProjectModal/CreateProject';

import { PageHeader } from '../../components/page-headers/page-headers';
// import { Cards } from '../../components/cards/frame/cards-frame';
import { Button } from '../../components/buttons/buttons';
import { Main } from '../styled';
import { AutoComplete } from '../../components/autoComplete/autoComplete';
import { fetchPrototypeDetailsAPI } from '../../api/api';



// import { ShareButtonPageHeader } from '../../components/buttons/share-button/share-button';
// import { ExportButtonPageHeader } from '../../components/buttons/export-button/export-button';
// import { CalendarButtonPageHeader } from '../../components/buttons/calendar-button/calendar-button';

const Dashboard = () => {

  const [ProtoTypeName, setProtoTypeName] = useState('');
  const [description, setProtoTypeDesc] = useState('');
  // const [ProtoTypeRemarks, setProtoTypeRemarks] = useState('');
  const [visible, setVisible] = useState(false);

  const[Prototype , setPrototype]= useState();
  const[filterPrototype , setFilterPrototype]= useState();

  // const[version, setVersion]= useState([]);
 
  const fetchPrototypes = async()=>
  {
    console.log("calling222-------------------------------------------------------------");
    const result = await fetchPrototypeDetailsAPI();
    setPrototype(result);
    setFilterPrototype(result);

    console.log("----------------",Prototype);
  }
  useEffect(() => {
    fetchPrototypes();
  }, [])

  const onCancel = () => {
    setVisible(false);
    console.log("cancelled");
  }
  // const [state, setState] = useState({
  //   notData: Prototype,
  // });

  // const { notData } = state;
  const onSubmit = () => {

    console.log("ProtoTypeName : ", ProtoTypeName);
    console.log("description : ", description);

    // notData.push({
    //   "id": "13",
    //   "title": ProtoTypeName,
    //   "status": "early",
    //   "content": ProtoTypeDesc,
    //   "category": "Web Design",
    //   "rate": 5,
    // "popular": 12,
    //   "percentage": 3,
    // });

    // setState({
    // notData: [...state.notData,{"id" : "13",
    // "title": ProtoTypeName,
    // "status": "early",
    // "title": ProtoTypeDesc}],
    // });
    setVisible(false);
  };
  // }

  const handleSearch = (searchText) => {
    console.log(Prototype);
    const data = Prototype.length > 0 ? Prototype?.filter((item) => 
        (item.prototypeName?.toUpperCase()?.startsWith(searchText?.toUpperCase()) || 
        item.description?.toUpperCase()?.includes(searchText.toUpperCase()))
         ||
        item.versions && item.versions.length && item.versions.some((version)=>version.versionName.toUpperCase().includes(searchText.toUpperCase()))
    ) : [];
    setFilterPrototype(data);
    // setState({
    //     ...state,
    //     notData: data,
    // });
};



  return (
    <>
      <PageHeader
        ghost
        title="Prototypes"
        buttons={[
          <div key="6" className="page-header-actions">
            {/* <CalendarButtonPageHeader key="1" />
            <ExportButtonPageHeader key="2" />
            <ShareButtonPageHeader key="3" /> */}
            <AutoComplete
              onSearch={handleSearch}
              dataSource={Prototype}
              width="100%"
              placeholder="Search by Name"
              patterns
            />
            <Button size="small" key="4" type="primary" onClick={() => setVisible(true)}>
              <FeatherIcon icon="plus" size={14} />
              Add Prototype
            </Button>
          </div>
        ]}
      />
      <Main>
        {
           Prototype && <Grid projects={filterPrototype} />
        }
        <CreateProject onCancel={onCancel} onSubmit={onSubmit} visible={visible} setProtoTypeDesc={setProtoTypeDesc} setProtoTypeName={setProtoTypeName} />
        {/* <Row gutter={25}>
          <Col lg={24} xs={24}>
            <Cards headless>
              <div style={{ minHeight: 'calc(100vh - 320px)' }}>
                <h2>Welcome to StrikingDash</h2>
              </div>
            </Cards>
          </Col>
        </Row> */}
      </Main>
    </>
  );
}

export default Dashboard;

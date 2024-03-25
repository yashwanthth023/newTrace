import React, { useState } from 'react';
import FeatherIcon from 'feather-icons-react';
import Grid from './Grid';
import CreateProject from '../ProjectModal/CreateProject';

import { PageHeader } from '../../components/page-headers/page-headers';
// import { Cards } from '../../components/cards/frame/cards-frame';
import { Button } from '../../components/buttons/buttons';
import { Main } from '../styled';
import { AutoComplete } from '../../components/autoComplete/autoComplete';
// import { ShareButtonPageHeader } from '../../components/buttons/share-button/share-button';
// import { ExportButtonPageHeader } from '../../components/buttons/export-button/export-button';
// import { CalendarButtonPageHeader } from '../../components/buttons/calendar-button/calendar-button';

const Dashboard = () => {

  const [ProtoTypeName, setProtoTypeName] = useState('');
  const [ProtoTypeDesc, setProtoTypeDesc] = useState('');
  const [ProtoTypeRemarks, setProtoTypeRemarks] = useState('');
  const [visible, setVisible] = useState(false);

  const projects = [
    {
      "id": 1,
      "title": "Lead Acid Fast Charge",
      "status": "early",
      "content": "Adipisicing eu magna velit est exercitation et consequat Lorem laboris nulla. Laborum exercitation minim id ea ea. Minim cillum magna excepteur laboris duis labore pariatur Lorem aute cupidatat velit sunt non. Est laborum anim aliqua in elit consequat elit elit cupidatat. Nulla excepteur laborum voluptate nisi eiusmod nostrud sit. Aute aliquip sit non consectetur laborum velit in exercitation laboris officia adipisicing deserunt. Sint laboris aute minim aliqua aute culpa laboris ad amet dolor ea Lorem sit.",
      "category": "Web Design",
      "rate": 5,
      "popular": 1,
      "percentage": 85
    },
    {
      "id": 2,
      "title": "Lead Acid super Fast Charge",
      "status": "progress",
      "content": "Adipisicing eu magna velit est exercitation et consequat Lorem laboris nulla. Laborum exercitation minim id ea ea. Minim cillum magna excepteur laboris duis labore pariatur Lorem aute cupidatat velit sunt non. Est laborum anim aliqua in elit consequat elit elit cupidatat. Nulla excepteur laborum voluptate nisi eiusmod nostrud sit. Aute aliquip sit non consectetur laborum velit in exercitation laboris officia adipisicing deserunt. Sint laboris aute minim aliqua aute culpa laboris ad amet dolor ea Lorem sit.",
      "category": "Web Development",
      "rate": 3,
      "popular": 2,
      "percentage": 38
    },
    {
      "id": 3,
      "title": "lithium ion Fast Charge",
      "status": "early",
      "content": "Adipisicing eu magna velit est exercitation et consequat Lorem laboris nulla. Laborum exercitation minim id ea ea. Minim cillum magna excepteur laboris duis labore pariatur Lorem aute cupidatat velit sunt non. Est laborum anim aliqua in elit consequat elit elit cupidatat. Nulla excepteur laborum voluptate nisi eiusmod nostrud sit. Aute aliquip sit non consectetur laborum velit in exercitation laboris officia adipisicing deserunt. Sint laboris aute minim aliqua aute culpa laboris ad amet dolor ea Lorem sit.",
      "category": "Graphic Design",
      "rate": 4,
      "popular": 3,
      "percentage": 46
    },
    {
      "id": 4,
      "title": "Lead Acid Fast Charge",
      "status": "late",
      "content": "Adipisicing eu magna velit est exercitation et consequat Lorem laboris nulla. Laborum exercitation minim id ea ea. Minim cillum magna excepteur laboris duis labore pariatur Lorem aute cupidatat velit sunt non. Est laborum anim aliqua in elit consequat elit elit cupidatat. Nulla excepteur laborum voluptate nisi eiusmod nostrud sit. Aute aliquip sit non consectetur laborum velit in exercitation laboris officia adipisicing deserunt. Sint laboris aute minim aliqua aute culpa laboris ad amet dolor ea Lorem sit.",
      "category": "Web Development",
      "rate": 5,
      "popular": 4,
      "percentage": 29
    },
    {
      "id": 5,
      "title": "Prototype5",
      "status": "progress",
      "content": "Adipisicing eu magna velit est exercitation et consequat Lorem laboris nulla. Laborum exercitation minim id ea ea. Minim cillum magna excepteur laboris duis labore pariatur Lorem aute cupidatat velit sunt non. Est laborum anim aliqua in elit consequat elit elit cupidatat. Nulla excepteur laborum voluptate nisi eiusmod nostrud sit. Aute aliquip sit non consectetur laborum velit in exercitation laboris officia adipisicing deserunt. Sint laboris aute minim aliqua aute culpa laboris ad amet dolor ea Lorem sit.",
      "category": "Web Development",
      "rate": 4,
      "popular": 5,
      "percentage": 96
    },
    {
      "id": 6,
      "title": "Prototype6",
      "status": "complete",
      "content": "Adipisicing eu magna velit est exercitation et consequat Lorem laboris nulla. Laborum exercitation minim id ea ea. Minim cillum magna excepteur laboris duis labore pariatur Lorem aute cupidatat velit sunt non. Est laborum anim aliqua in elit consequat elit elit cupidatat. Nulla excepteur laborum voluptate nisi eiusmod nostrud sit. Aute aliquip sit non consectetur laborum velit in exercitation laboris officia adipisicing deserunt. Sint laboris aute minim aliqua aute culpa laboris ad amet dolor ea Lorem sit.",
      "category": "Graphic Design",
      "rate": 3,
      "popular": 6,
      "percentage": 73
    },
    {
      "id": 7,
      "title": "Prototype7",
      "status": "progress",
      "content": "Adipisicing eu magna velit est exercitation et consequat Lorem laboris nulla. Laborum exercitation minim id ea ea. Minim cillum magna excepteur laboris duis labore pariatur Lorem aute cupidatat velit sunt non. Est laborum anim aliqua in elit consequat elit elit cupidatat. Nulla excepteur laborum voluptate nisi eiusmod nostrud sit. Aute aliquip sit non consectetur laborum velit in exercitation laboris officia adipisicing deserunt. Sint laboris aute minim aliqua aute culpa laboris ad amet dolor ea Lorem sit.",
      "category": "Web Development",
      "rate": 2,
      "popular": 7,
      "percentage": 42
    },
    {
      "id": 8,
      "title": "Prototype8",
      "status": "early",
      "content": "Adipisicing eu magna velit est exercitation et consequat Lorem laboris nulla. Laborum exercitation minim id ea ea. Minim cillum magna excepteur laboris duis labore pariatur Lorem aute cupidatat velit sunt non. Est laborum anim aliqua in elit consequat elit elit cupidatat. Nulla excepteur laborum voluptate nisi eiusmod nostrud sit. Aute aliquip sit non consectetur laborum velit in exercitation laboris officia adipisicing deserunt. Sint laboris aute minim aliqua aute culpa laboris ad amet dolor ea Lorem sit.",
      "category": "Graphic Design",
      "rate": 4,
      "popular": 8,
      "percentage": 36
    },
    {
      "id": 9,
      "title": "Prototype9",
      "status": "late",
      "content": "Adipisicing eu magna velit est exercitation et consequat Lorem laboris nulla. Laborum exercitation minim id ea ea. Minim cillum magna excepteur laboris duis labore pariatur Lorem aute cupidatat velit sunt non. Est laborum anim aliqua in elit consequat elit elit cupidatat. Nulla excepteur laborum voluptate nisi eiusmod nostrud sit. Aute aliquip sit non consectetur laborum velit in exercitation laboris officia adipisicing deserunt. Sint laboris aute minim aliqua aute culpa laboris ad amet dolor ea Lorem sit.",
      "category": "Web Development",
      "rate": 3,
      "popular": 9,
      "percentage": 82
    },
    {
      "id": 10,
      "title": "Prototype10",
      "status": "progress",
      "content": "Adipisicing eu magna velit est exercitation et consequat Lorem laboris nulla. Laborum exercitation minim id ea ea. Minim cillum magna excepteur laboris duis labore pariatur Lorem aute cupidatat velit sunt non. Est laborum anim aliqua in elit consequat elit elit cupidatat. Nulla excepteur laborum voluptate nisi eiusmod nostrud sit. Aute aliquip sit non consectetur laborum velit in exercitation laboris officia adipisicing deserunt. Sint laboris aute minim aliqua aute culpa laboris ad amet dolor ea Lorem sit.",
      "category": "Web Development",
      "rate": 2,
      "popular": 10,
      "percentage": 63
    },
    {
      "id": 11,
      "title": "Prototype11",
      "status": "complete",
      "content": "Adipisicing eu magna velit est exercitation et consequat Lorem laboris nulla. Laborum exercitation minim id ea ea. Minim cillum magna excepteur laboris duis labore pariatur Lorem aute cupidatat velit sunt non. Est laborum anim aliqua in elit consequat elit elit cupidatat. Nulla excepteur laborum voluptate nisi eiusmod nostrud sit. Aute aliquip sit non consectetur laborum velit in exercitation laboris officia adipisicing deserunt. Sint laboris aute minim aliqua aute culpa laboris ad amet dolor ea Lorem sit.",
      "category": "Graphic Design",
      "rate": 1,
      "popular": 11,
      "percentage": 53
    },
    {
      "id": 12,
      "title": "Prototype12",
      "status": "early",
      "content": "Adipisicing eu magna velit est exercitation et consequat Lorem laboris nulla. Laborum exercitation minim id ea ea. Minim cillum magna excepteur laboris duis labore pariatur Lorem aute cupidatat velit sunt non. Est laborum anim aliqua in elit consequat elit elit cupidatat. Nulla excepteur laborum voluptate nisi eiusmod nostrud sit. Aute aliquip sit non consectetur laborum velit in exercitation laboris officia adipisicing deserunt. Sint laboris aute minim aliqua aute culpa laboris ad amet dolor ea Lorem sit.",
      "category": "Web Design",
      "rate": 5,
      "popular": 12,
      "percentage": 33
    }
  ];

  const onCancel = () => {
    setVisible(false);
    console.log("cancelled");
  }
  const [state, setState] = useState({
    notData: projects,
  });

  const { notData } = state;
  const onSubmit = () => {
    notData.push({
      "id": "13",
      "title": ProtoTypeName,
      "status": "early",
      "content": ProtoTypeDesc,
      "category": "Web Design",
      "rate": 5,
      "popular": 12,
      "percentage": 3,
      "remarks" : ProtoTypeRemarks
    });
    // setState({
    // notData: [...state.notData,{"id" : "13",
    // "title": ProtoTypeName,
    // "status": "early",
    // "title": ProtoTypeDesc}],
    // });
    setVisible(false);
  };
  // }

  console.log("ProtoTypeName  -", ProtoTypeName);

  const handleSearch = (searchText) => {
    const data = projects.filter((item) => item.title.toUpperCase().startsWith(searchText.toUpperCase()));
    setState({
      ...state,
      notData: data,
    });
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
              dataSource={notData}
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
        <Grid projects={notData} />
        <CreateProject onCancel={onCancel} onSubmit={onSubmit} visible={visible} setProtoTypeRemarks={setProtoTypeRemarks} setProtoTypeDesc={setProtoTypeDesc} setProtoTypeName={setProtoTypeName} />
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

import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PRESIDENT from './Candidates/Presidents';
import VicePresident from './Candidates/VicePresident';
import CheifJudge from './Candidates/ChiefJudge';
import CheifJudgeGirls from './Candidates/ChiefGirls';
import Entertainment from './Candidates/Entertainment';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-
        labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 450,
    marginTop: 100
  },
  tabs: {
    // border: `5px solid white`,
    backgroundColor: 'green',
    color: 'white',
  },

  tab: {
    borderTop: '1px solid white',
  }
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab 
            label="PRESIDENT OF THE SENATE" {...a11yProps(0)} 
            className={classes.tab} 
        />

        <Tab 
            label="VICE PRESIDENT" {...a11yProps(1)} 
            className={classes.tab} 
        />

        <Tab 
            label="CHIEF JUDGE (BOYS)" {...a11yProps(2)} 
            className={classes.tab} 
        />

        <Tab 
            label="CHIEF JUDGE (GIRLS)" {...a11yProps(3)} 
            className={classes.tab} 
        />

        <Tab 
            label="ENTERTAINMENT SENATOR (2 positions)" {...a11yProps(4)} 
            className={classes.tab} 
        />

        <Tab 
            label="HEALTH SENATOR (2 positions)" {...a11yProps(5)} 
            className={classes.tab} 
        />

        <Tab 
            label="SENATOR IN CHARGE OF THE A LEVEL CENTER" {...a11yProps(6)} 
            className={classes.tab} 
        />

        <Tab 
            label="DINING SENATOR" {...a11yProps(7)} 
            className={classes.tab} 
        />

        <Tab 
            label="LIBRARY AND INFORMATION SENATOR" {...a11yProps(8)} 
            className={classes.tab} 
        />

        <Tab 
            label="SCHOOL EVENTS SENATOR" {...a11yProps(9)} 
            className={classes.tab} 
        />

        <Tab 
            label="TIME MANAGEMENT SENATOR (2 positions)" {...a11yProps(10)} 
            className={classes.tab} 
        />

        <Tab 
            label="RELIGIOUS SENATOR -BORN AGAINS" {...a11yProps(11)} 
            className={classes.tab} 
        />

        <Tab 
            label="UNIFORM AND COMPOUND SENATORS (2-girls &amp; 2- boys)" {...a11yProps(12)}
            className={classes.tab}  
        />

        <Tab 
            label="DAY SCHOLARS’ SENATOR" {...a11yProps(14)} 
            className={classes.tab} 
        />

        <Tab 
            label="ACADEMICS SENATOR" {...a11yProps(15)} 
            className={classes.tab} 
        />

        <Tab 
            label="COUNCILLOR FOR SIMBA" {...a11yProps(16)} 
            className={classes.tab} 
        />

        <Tab 
            label="COUNCILLOR FOR TITIANS" {...a11yProps(17)} 
            className={classes.tab} 
        />

        <Tab 
            label="COUNCILLOR FOR SPARROWS" {...a11yProps(18)} 
            className={classes.tab} 
        />

        <Tab 
            label="COUNCILLOR FOR TIGERS" {...a11yProps(19)} 
            className={classes.tab} 
        />

        <Tab 
            label="COUNCILLOR FOR SPURS" {...a11yProps(20)} 
            className={classes.tab} 
        />

        <Tab 
            label="COUNCILLOR FOR NIGHTINGALE" {...a11yProps(22)} 
            className={classes.tab}  
        />

        <Tab 
            label="COUNCILLOR FOR EAGLES" {...a11yProps(22)} 
            className={classes.tab} 
        />

        <Tab 
            label="COUNCILLOR FOR RAVENS" {...a11yProps(23)} 
            className={classes.tab} 
        />

        <Tab 
            label="COUNCILLOR FOR S.5 RED HAWKS" {...a11yProps(24)} 
            className={classes.tab} 
        />

        <Tab 
            label="COUNCILLOR FOR S.5 GOLD CREST" {...a11yProps(25)} 
            className={classes.tab} 
        />

        <Tab 
            label="COUNCILLOR FOR YEAR-7" {...a11yProps(26)} 
            className={classes.tab} 
        />

        <Tab 
            label="COUNCILLOR FOR YEAR-8 WAX BILL" {...a11yProps(27)} 
            className={classes.tab} 
        />

        <Tab 
            label="COUNCILLOR FOR YEAR-8 GALAXY" {...a11yProps(28)} 
            className={classes.tab} 
        />

        <Tab 
            label="COUNCILLOR FOR YEAR-9 DOLPHIN" {...a11yProps(29)} 
            className={classes.tab} 
        />

        <Tab 
            label="COUNCILLOR FOR YEAR-9 COUGARS" {...a11yProps(30)} 
            className={classes.tab} 
        />

        <Tab 
            label="COUNCILLOR FOR YEAR-10 LIGERS" {...a11yProps(31)} 
            className={classes.tab} 
        />

        <Tab 
            label="COUNCILLOR FOR YEAR-10 HUSKIES" {...a11yProps(32)} 
            className={classes.tab} 
        />

        <Tab 
            label="COUNCILLOR FOR YEAR-12 PANTHERS" {...a11yProps(33)} 
            className={classes.tab} 
        />
      </Tabs>

      {/* Tabs to display */}
      <TabPanel value={value} index={0} style={{
        margin: 'auto'
      }}>
        <PRESIDENT />
      </TabPanel>

      <TabPanel value={value} index={1} style={{
        margin: 'auto'
      }}>
        <VicePresident />
      </TabPanel>

      <TabPanel value={value} index={2} style={{
        margin: 'auto'
      }}>
        <CheifJudge />
      </TabPanel>

      <TabPanel value={value} index={3} style={{
        margin: 'auto'
      }}>
        <CheifJudgeGirls />
      </TabPanel>

      <TabPanel value={value} index={4} style={{
        margin: 'auto'
      }}>
        <Entertainment />
      </TabPanel>

      <TabPanel value={value} index={5} style={{
        margin: 'auto'
      }}>
        Item Six
      </TabPanel>

      <TabPanel value={value} index={6} style={{
        margin: 'auto'
      }}>
        Item Seven
      </TabPanel>

      <TabPanel value={value} index={7} style={{
        margin: 'auto'
      }}>
        Item Seven
      </TabPanel>

      <TabPanel value={value} index={8} style={{
        margin: 'auto'
      }}>
        Item Seven
      </TabPanel>

      <TabPanel value={value} index={9} style={{
        margin: 'auto'
      }}>
        Item Seven
      </TabPanel>

      <TabPanel value={value} index={10} style={{
        margin: 'auto'
      }}>
        Item Seven
      </TabPanel>

      <TabPanel value={value} index={11} style={{
        margin: 'auto'
      }}>
        Item Seven
      </TabPanel>

      <TabPanel value={value} index={12} style={{
        margin: 'auto'
      }}>
        Item Seven
      </TabPanel>

      <TabPanel value={value} index={13} style={{
        margin: 'auto'
      }}>
        Item Seven
      </TabPanel>

      <TabPanel value={value} index={14} style={{
        margin: 'auto'
      }}>
        Item Seven
      </TabPanel>

      <TabPanel value={value} index={15} style={{
        margin: 'auto'
      }}>
        Item Seven
      </TabPanel>

      <TabPanel value={value} index={16} style={{
        margin: 'auto'
      }}>
        Item Seven
      </TabPanel>

      <TabPanel value={value} index={17} style={{
        margin: 'auto'
      }}>
        Item Seven
      </TabPanel>

      <TabPanel value={value} index={18} style={{
        margin: 'auto'
      }}>
        Item Seven
      </TabPanel>

      <TabPanel value={value} index={19} style={{
        margin: 'auto'
      }}>
        Item Seven
      </TabPanel>

      <TabPanel value={value} index={20} style={{
        margin: 'auto'
      }}>
        Item Seven
      </TabPanel>

      <TabPanel value={value} index={21} style={{
        margin: 'auto'
      }}>
        Item Seven
      </TabPanel>

      <TabPanel value={value} index={22} style={{
        margin: 'auto'
      }}>
        Item Seven
      </TabPanel>

      <TabPanel value={value} index={23} style={{
        margin: 'auto'
      }}>
        Item Seven
      </TabPanel>

      <TabPanel value={value} index={24} style={{
        margin: 'auto'
      }}>
        Item Seven
      </TabPanel>

      <TabPanel value={value} index={25} style={{
        margin: 'auto'
      }}>
        Item Seven
      </TabPanel>

      <TabPanel value={value} index={26} style={{
        margin: 'auto'
      }}>
        Item Seven
      </TabPanel>

      <TabPanel value={value} index={27} style={{
        margin: 'auto'
      }}>
        Item Seven
      </TabPanel>

      <TabPanel value={value} index={28} style={{
        margin: 'auto'
      }}>
        Item Seven
      </TabPanel>

      <TabPanel value={value} index={29} style={{
        margin: 'auto'
      }}>
        Item Seven
      </TabPanel>

      <TabPanel value={value} index={30} style={{
        margin: 'auto'
      }}>
        Item Seven
      </TabPanel>

      <TabPanel value={value} index={31} style={{
        margin: 'auto'
      }}>
        Item Seven
      </TabPanel>
    </div>
  );
}

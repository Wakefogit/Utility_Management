import * as React from 'react';
import Box from '@mui/material/Box';
import { useSpring, animated } from '@react-spring/web';
import SvgIcon from '@mui/material/SvgIcon';

import Collapse from '@mui/material/Collapse';
import { alpha, styled } from '@mui/material/styles';
import { TreeView } from '@mui/x-tree-view/TreeView';
import { TreeItem, treeItemClasses } from '@mui/x-tree-view/TreeItem'; 

// Define custom folder and file icons
function FolderIcon(props) {
  return (
    <SvgIcon fontSize="inherit" style={{ width: 14, height: 14 }} {...props}>
   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"/></svg>
    </SvgIcon>
  );
}

// function FileIcon(props) {
//   return (
//     <SvgIcon fontSize="inherit" style={{ width: 14, height: 14 }} {...props}>
//      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M15 7h5.5L15 1.5V7M8 0h8l6 6v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2M4 4v18h16v2H4a2 2 0 0 1-2-2V4h2Z"/></svg>
//     </SvgIcon>
//   );
// }

// Define a custom transition component
function TransitionComponent(props) {
  const style = useSpring({
    to: {
      opacity: props.in ? 1 : 0,
      transform: `translate3d(${props.in ? 0 : 20}px,0,0)`,
    },
  });

  return (
    <animated.div style={style}>
      <Collapse {...props} />
    </animated.div>
  );
}

// Create a custom TreeItem
const CustomTreeItem = React.forwardRef((props, ref) => (
  <TreeItem {...props} TransitionComponent={TransitionComponent} ref={ref} />
));

const StyledTreeItem = styled(CustomTreeItem)(({ theme }) => ({
  [`& .${treeItemClasses.iconContainer}`]: {
    '& .close': {
      opacity: 0.3,
    },
  },
  [`& .${treeItemClasses.group}`]: {
    marginLeft: 15,
    paddingLeft: 18,
    borderLeft: `1px dashed ${alpha(theme.palette.text.primary, 0.4)}`,
  },
  '& .checkbox': {
    color: 'grey', // Change the color to grey
  },
}));

export default function CustomizedTreeView1() {

    const [selected, setSelected] = React.useState([]);

  const handleToggle = (event, nodeId) => {
    if (selected.includes(nodeId)) {
      setSelected(selected.filter((item) => item !== nodeId));
    } else {
      setSelected([...selected, nodeId]);
    }
  };

  return (
    <Box sx={{ minHeight: 270, flexGrow: 1, maxWidth: 300, overflowX: 'auto',}}>
      <TreeView
   
        aria-label="customized"
        defaultExpanded={['1']}
        defaultCollapseIcon={<FolderIcon />} // Use folder icon for collapse
        defaultExpandIcon={<FolderIcon />} // Use folder icon for expand
        // defaultEndIcon={<FileIcon />} // Use file icon for leaf nodes
        sx={{ overflowX: 'hidden' }}
      >
 
 <StyledTreeItem
          nodeId="101"
          label={
            <label>
              <input
                type="checkbox"
                checked={selected.includes("101")}
                onChange={(event) => handleToggle(event, "101")}
              />
              -Main Option 1
            </label>
          }
        >
 </StyledTreeItem>
 <StyledTreeItem
          nodeId="102"
          label={
            <label>
              <input
                type="checkbox"
                checked={selected.includes("102")}
                onChange={(event) => handleToggle(event, "102")}
              />
              -Main Option 1
            </label>
          }
        >
 </StyledTreeItem>
 <StyledTreeItem
          nodeId="103"
          label={
            <label>
              <input
                type="checkbox"
                checked={selected.includes("103")}
                onChange={(event) => handleToggle(event, "103")}
              />
              -Main Option 1
            </label>
          }
        >
 </StyledTreeItem>
 <StyledTreeItem
          nodeId="104"
          label={
            <label>
              <input
                type="checkbox"
                checked={selected.includes("104")}
                onChange={(event) => handleToggle(event, "104")}
              />
              -Main Option 1
            </label>
          }
        >
 </StyledTreeItem>
 <StyledTreeItem
          nodeId="105"
          label={
            <label>
              <input
                type="checkbox"
                checked={selected.includes("105")}
                onChange={(event) => handleToggle(event, "105")}
              />
              -Main Option 1
            </label>
          }
        >
 </StyledTreeItem>
 <StyledTreeItem
          nodeId="106"
          label={
            <label>
              <input
                type="checkbox"
                checked={selected.includes("106")}
                onChange={(event) => handleToggle(event, "106")}
              />
              -Main Option 1
            </label>
          }
        >
 </StyledTreeItem>
 <StyledTreeItem
          nodeId="107"
          label={
            <label>
              <input
                type="checkbox"
                checked={selected.includes("107")}
                onChange={(event) => handleToggle(event, "107")}
              />
              -Main Option 1
            </label>
          }
        >
 </StyledTreeItem>
 <StyledTreeItem
          nodeId="108"
          label={
            <label>
              <input
                type="checkbox"
                checked={selected.includes("108")}
                onChange={(event) => handleToggle(event, "108")}
              />
              -Main Option 1
            </label>
          }
        >
 </StyledTreeItem>
 <StyledTreeItem
          nodeId="109"
          label={
            <label>
              <input
                type="checkbox"
                checked={selected.includes("109")}
                onChange={(event) => handleToggle(event, "109")}
              />
              -Main Option 1
            </label>
          }
        >
 </StyledTreeItem>
 <StyledTreeItem
          nodeId="110"
          label={
            <label>
              <input
                type="checkbox"
                checked={selected.includes("110")}
                onChange={(event) => handleToggle(event, "110")}
              />
              -Main Option 1
            </label>
          }
        >
 </StyledTreeItem>
 <StyledTreeItem
          nodeId="110"
          label={
            <label>
              <input
                type="checkbox"
                checked={selected.includes("110")}
                onChange={(event) => handleToggle(event, "110")}
              />
              -Main Option 1
            </label>
          }
        >
 </StyledTreeItem>
 <StyledTreeItem
          nodeId="110"
          label={
            <label>
              <input
                type="checkbox"
                checked={selected.includes("110")}
                onChange={(event) => handleToggle(event, "110")}
              />
              -Main Option 1
            </label>
          }
        >
 </StyledTreeItem><StyledTreeItem
          nodeId="110"
          label={
            <label>
              <input
                type="checkbox"
                checked={selected.includes("110")}
                onChange={(event) => handleToggle(event, "110")}
              />
              -Main Option 1
            </label>
          }
        >
 </StyledTreeItem><StyledTreeItem
          nodeId="110"
          label={
            <label>
              <input
                type="checkbox"
                checked={selected.includes("110")}
                onChange={(event) => handleToggle(event, "110")}
              />
              -Main Option 1
            </label>
          }
        >
 </StyledTreeItem><StyledTreeItem
          nodeId="110"
          label={
            <label>
              <input
                type="checkbox"
                checked={selected.includes("110")}
                onChange={(event) => handleToggle(event, "110")}
              />
              -Main Option 1
            </label>
          }
        >
 </StyledTreeItem><StyledTreeItem
          nodeId="110"
          label={
            <label>
              <input
                type="checkbox"
                checked={selected.includes("110")}
                onChange={(event) => handleToggle(event, "110")}
              />
              -Main Option 1
            </label>
          }
        >
 </StyledTreeItem><StyledTreeItem
          nodeId="110"
          label={
            <label>
              <input
                type="checkbox"
                checked={selected.includes("110")}
                onChange={(event) => handleToggle(event, "110")}
              />
              -Main Option 1
            </label>
          }
        >
 </StyledTreeItem>


   

        
      </TreeView>
    </Box>
  );
}
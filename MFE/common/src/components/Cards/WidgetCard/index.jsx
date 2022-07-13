import React from 'react';

import { Card, CardContent, CardHeader, Fade, ListItemText, Menu, MenuItem, IconButton } from '@material-ui/core';
import { MoreVert } from '@material-ui/icons';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import useStyles from './style';

const WidgetCard = ({ id, onDelete, onPin, config, children, onEdit, onExport, isStatic }) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const { t } = useTranslation(['common']);

  const handleClickMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (callback = () => {}) => {
    setAnchorEl(null);
    callback(id);
  };

  return (
    <Card className={classes.card} variant='outlined'>
      <CardHeader
        action={
          <div>
            <IconButton
              aria-controls='fade-menu-2'
              aria-haspopup='true'
              aria-label='settings'
              onClick={handleClickMenu}
              size='small'
              classes={{ sizeSmall: classes.iconButtonSmall }}
            >
              <MoreVert />
            </IconButton>
            <Menu
              id='fade-menu-2'
              anchorEl={anchorEl}
              keepMounted
              open={open}
              onClose={handleClose}
              TransitionComponent={Fade}
            >
              <MenuItem onClick={() => handleClose(onEdit)}>
                <ListItemText primary={t('common:edit')} />
              </MenuItem>
              <MenuItem onClick={() => handleClose(onPin)}>
                <ListItemText primary={isStatic ? t('common:unpin') : t('common:pin')} />
              </MenuItem>
              <MenuItem onClick={() => handleClose(onExport)}>
                <ListItemText primary={t('common:export')} />
              </MenuItem>
              <MenuItem onClick={() => handleClose(onDelete)}>
                <ListItemText primary={t('common:delete')} />
              </MenuItem>
            </Menu>
          </div>
        }
        classes={{
          root: classes.header,
          title: classes.headerTitle,
          action: classes.headerAction,
          subheader: classes.subHeaderTitle,
        }}
        title={config.meta.title}
        subheader={config.meta.subTitle}
      />
      <CardContent className={classes.cardContent}>{children}</CardContent>
    </Card>
  );
};

WidgetCard.propTypes = {
  id: PropTypes.string.isRequired,
  config: PropTypes.shape({
    meta: PropTypes.shape({
      title: PropTypes.string.isRequired,
      subTitle: PropTypes.string,
    }),
  }).isRequired,
  children: PropTypes.node.isRequired,
  onDelete: PropTypes.func.isRequired,
  onPin: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onExport: PropTypes.func.isRequired,
};

export default WidgetCard;
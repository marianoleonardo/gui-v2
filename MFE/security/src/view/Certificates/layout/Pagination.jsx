import React from 'react';

import { Box, TablePagination, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import { ROWS_PER_PAGE_OPTIONS } from 'sharedComponents/Constants';
import { usePaginationStyles } from './style';

const Pagination = ({
  page,
  rowsPerPage,
  totalOfPages,
  handleChangePage,
  numberOfSelectedCertificates,
  handleChangeRowsPerPage,
}) => {
  const { t } = useTranslation('certificates');
  const classes = usePaginationStyles();

  return (
    <Box className={classes.pagination} paddingX={2} paddingY={1}>
      <Typography>{t('totalOfPages', { count: totalOfPages })}</Typography>

      {!!numberOfSelectedCertificates && (
        <Typography>
          {t('numberOfSelectedCertificates', { count: numberOfSelectedCertificates })}
        </Typography>
      )}

      <TablePagination
        page={page}
        component='div'
        rowsPerPage={rowsPerPage}
        count={totalOfPages * rowsPerPage}
        labelRowsPerPage={t('labelRowsPerPage')}
        rowsPerPageOptions={ROWS_PER_PAGE_OPTIONS}
        nextIconButtonText={t('nextIconButtonText')}
        backIconButtonText={t('backIconButtonText')}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        labelDisplayedRows={() => {
          return t('pageInfo', { page: page + 1, totalOfPages });
        }}
      />
    </Box>
  );
};

Pagination.propTypes = {
  page: PropTypes.number,
  rowsPerPage: PropTypes.number,
  totalOfPages: PropTypes.number,
  numberOfSelectedCertificates: PropTypes.number,
  handleChangePage: PropTypes.func,
  handleChangeRowsPerPage: PropTypes.func,
};

Pagination.defaultProps = {
  page: 0,
  rowsPerPage: 0,
  totalOfPages: 0,
  numberOfSelectedCertificates: 0,
  handleChangePage: null,
  handleChangeRowsPerPage: null,
};

export default Pagination;

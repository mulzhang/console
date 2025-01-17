// This file is part of MinIO Console Server
// Copyright (c) 2023 MinIO, Inc.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

import React, { Fragment, useState } from "react";
import { IConfigurationSys, IElementValue } from "../../Configurations/types";
import { Button, DataTable, Grid, TierOfflineIcon, TierOnlineIcon } from "mds";
import AddEndpointModal from "./AddEndpointModal";
import DeleteWebhookEndpoint from "./DeleteWebhookEndpoint";
import EditWebhookEndpoint from "./EditWebhookEndpoint";

interface WebhookSettingsProps {
  WebhookSettingslist: IConfigurationSys[];
  setResetConfigurationOpen: () => void;
  type: string;
}

const WebhookSettings = ({
  setResetConfigurationOpen,
  WebhookSettingslist,
  type,
}: WebhookSettingsProps) => {
  const [newEndpointOpen, setNewEndpointOpen] = useState<boolean>(false);
  const [deleteWebhookOpen, setDeleteWebhookOpen] = useState<boolean>(false);
  const [editWebhookOpen, setEditWebhookOpen] = useState<boolean>(false);
  const [selectedARN, setSelectedARN] = useState<string>("");
  const [selectedEndpoint, setSelectedEndpoint] =
    useState<IConfigurationSys | null>(null);

  const renderEndpoint = (item: IElementValue[]) => {
    const endpointFilter = item.find((itm) => itm.key === "endpoint");

    if (endpointFilter) {
      return endpointFilter.value;
    }

    return "";
  };

  const renderWebhookStatus = (item: IElementValue[]) => {
    const EnableFilter = item.find((itm) => itm.key === "enable");

    // If enable is not set, then enabled by default
    if (!EnableFilter || EnableFilter.value === "on") {
      return (
        <Grid
          container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyItems: "start",
            fontSize: "8px",
          }}
        >
          <TierOnlineIcon style={{ fill: "#4CCB92" }} />
          Enabled
        </Grid>
      );
    }

    return (
      <Grid
        container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyItems: "start",
          fontSize: "8px",
        }}
      >
        <TierOfflineIcon style={{ fill: "#C83B51" }} />
        Disabled
      </Grid>
    );
  };

  const onCloseDelete = () => {
    setDeleteWebhookOpen(false);
    setSelectedARN("");
  };

  const onCloseEditWebhook = () => {
    setEditWebhookOpen(false);
    setSelectedEndpoint(null);
  };

  const actions = [
    {
      type: "view",
      onClick: (item: IConfigurationSys) => {
        if (item.name) {
          setEditWebhookOpen(true);
          setSelectedEndpoint(item);
        }
      },
    },
    {
      type: "delete",
      onClick: (item: IConfigurationSys) => {
        if (item.name) {
          setDeleteWebhookOpen(true);
          setSelectedARN(item.name);
        }
      },
    },
  ];

  return (
    <Grid container>
      {newEndpointOpen && (
        <AddEndpointModal
          open={newEndpointOpen}
          type={type}
          onCloseEndpoint={() => {
            setNewEndpointOpen(false);
          }}
        />
      )}
      {deleteWebhookOpen && (
        <DeleteWebhookEndpoint
          modalOpen={deleteWebhookOpen}
          onClose={onCloseDelete}
          selectedARN={selectedARN}
          type={type}
        />
      )}
      {editWebhookOpen && selectedEndpoint && (
        <EditWebhookEndpoint
          open={editWebhookOpen}
          type={type}
          endpointInfo={selectedEndpoint}
          onCloseEndpoint={onCloseEditWebhook}
        />
      )}
      <Grid item xs={12} sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          id={"newWebhook"}
          variant="callAction"
          onClick={() => {
            setNewEndpointOpen(true);
          }}
        >
          New Endpoint
        </Button>
      </Grid>
      <Grid item xs={12} sx={{ padding: "0 10px 10px" }}>
        <Fragment>
          <h3>Currently Configured Endpoints</h3>
          <DataTable
            columns={[
              {
                label: "Status",
                elementKey: "key_values",
                renderFunction: renderWebhookStatus,
                width: 50,
              },
              { label: "Name", elementKey: "name" },
              {
                label: "Endpoint",
                elementKey: "key_values",
                renderFunction: renderEndpoint,
              },
            ]}
            itemActions={actions}
            idField="name"
            isLoading={false}
            records={WebhookSettingslist}
            entityName="endpoints"
            customPaperHeight={"calc(100vh - 750px)"}
          />
        </Fragment>
      </Grid>
    </Grid>
  );
};

export default WebhookSettings;

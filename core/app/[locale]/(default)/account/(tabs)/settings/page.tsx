import { notFound } from 'next/navigation';

import { TabHeading } from '../_components/tab-heading';

import { UpdateSettingsForm } from './_components/update-settings-form';
import { getCustomerSettingsQuery } from './page-data';

export default async function Settings() {
  const customerSettings = await getCustomerSettingsQuery({
    address: { filters: { entityIds: [4, 5, 6, 7] } },
  });

  if (!customerSettings) {
    notFound();
  }

  return (
    <>
      <TabHeading heading="settings" />
      <div className="mx-auto lg:w-2/3">
        <UpdateSettingsForm {...customerSettings} />
      </div>
    </>
  );
}

export const runtime = 'edge';

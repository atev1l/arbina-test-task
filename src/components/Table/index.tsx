import React from 'react';

interface ITable {
	logs: any[],
}

export const Table: React.FC<ITable> = ({
	logs,
}) => {
	const rowsTable = logs.map((item: any, index) => {
		const date = getCorrentDate(item.action_createad_at)

		return (
			<tr key={index + item.action_createad_at}>
				<th> {item.username} </th>
				<th> {item.action} </th>
				<th> {date} </th>
			</tr>
		)
	})

	const headersTable = (
		<tr>
			<th style={{width: '33.33%'}}>Username</th>
			<th style={{width: '33.33%'}}>Action</th>
			<th style={{width: '33.33%'}}>Created Date</th>
		</tr>
	)

	const table = (
		<table className="bp4-html-table .modifier">
			<thead>
				{headersTable}
			</thead>
			<tbody>
				{rowsTable}
			</tbody>
		</table>
	)

	return (
			<div style={{
				border: '1px solid rgba(0, 0, 0, 0.1)',
				borderRadius: '6px',
				margin: '20px 0',
				maxWidth: '420px',
				width: '420px',
				backgroundColor: '#FFFFFF',
				maxHeight: '450px',
				overflow: 'auto'
			}}>
				{table}
			</div>
	)
}

export default function getCorrentDate(createdDate: string){
	let date = new Date(createdDate)
	let year = date.getFullYear();
	let formatDate: any[] = [date.getMonth() + 1, date.getDate(), date.getHours(), date.getMinutes()];

	formatDate.forEach((item, index: number) => {
		if (item < 10) {
			formatDate[index] = '0' + item;
		}
	})

	return year + '-' + formatDate[0] + '-' + formatDate[1] + ' ' + formatDate[2] + ':' + formatDate[3]
}

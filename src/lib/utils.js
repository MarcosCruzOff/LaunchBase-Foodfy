module.exports = {
	date(timestamp) {
		const date = new Date(timestamp)

		//yyyy -- Ano --
		const year = date.getUTCFullYear()

		//mm -- Mês --
		const month = `0${date.getUTCMonth() + 1}`.slice(-2)

		//dd -- Dia --
		const day = `0${date.getUTCDate()}`.slice(-2)

		return {
			day,
			month,
			year,
			iso: `${year}-${month}-${day}`,
			birthDay: `${day}/${month}`,
			format: `${day}/${month}/${year}`,
		} // iso
	},
}

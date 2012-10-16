function is_leap_year(currentYear)
{
	if(currentYear % 4==0 )
	{
		if(currentYear%100==0 && currentYear%400==0)
		{				
			return true;
		}
		else
		{
			return false;
		}
	}
	else
	{
		return false;
	}
}
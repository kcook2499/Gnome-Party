#pragma strict

public var diceNumber : int = 1;
public var keepUpdating : boolean = true;

private var timeUpdate : float = 0;
private var diceMax : int = 10;

function Start ()
{
}
function Update ()
{
	if (keepUpdating)
	{
		timeUpdate += Time.deltaTime;
		if (timeUpdate >= 0.05)
		{
			timeUpdate = 0;
			UpdateDice();
		}
	}
}
function UpdateDice ()
{
	if (diceNumber < diceMax)
		diceNumber++;
	else
		diceNumber = 1;
	var textMesh = GetComponent.<TextMesh>();
	textMesh.text = diceNumber.ToString();
}
function getNumber ()
{
	return diceNumber;
}